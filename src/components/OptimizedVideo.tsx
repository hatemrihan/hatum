"use client";

import React, { useRef, useEffect, useState } from 'react';

interface OptimizedVideoProps {
  src: string;
  className?: string;
  poster?: string;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  controls?: boolean;
  autoPlay?: boolean;
  preload?: 'none' | 'metadata' | 'auto';
  style?: React.CSSProperties;
}

const OptimizedVideo: React.FC<OptimizedVideoProps> = ({
  src,
  className = '',
  poster,
  muted = true,
  loop = true,
  playsInline = true,
  controls = false,
  autoPlay = true,
  preload = 'auto',
  style,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasStartedPlaying, setHasStartedPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Intersection Observer for auto-play when visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStartedPlaying) {
            setIsInView(true);
            // Immediately try to play when visible
            if (video.readyState >= 2) { // HAVE_CURRENT_DATA
              playVideo();
            }
          } else if (!entry.isIntersecting) {
            setIsInView(false);
            video.pause();
          }
        });
      },
      {
        threshold: 0.3, // Play when 30% visible
        rootMargin: '50px', // Start loading 50px before entering viewport
      }
    );

    observer.observe(video);

    // Video event listeners
    const handleLoadedData = () => {
      setIsLoaded(true);
      if (isInView && autoPlay && !hasStartedPlaying) {
        playVideo();
      }
    };

    const handleCanPlay = () => {
      if (isInView && autoPlay && !hasStartedPlaying) {
        playVideo();
      }
    };

    const playVideo = async () => {
      try {
        if (video && !hasStartedPlaying) {
          await video.play();
          setHasStartedPlaying(true);
        }
      } catch (error) {
        console.log('Video autoplay failed (likely due to browser policy):', error);
      }
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('canplay', handleCanPlay);

    // Cleanup
    return () => {
      observer.disconnect();
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, [isInView, autoPlay, hasStartedPlaying]);

  // Additional effect to handle play/pause based on visibility
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isInView && isLoaded && autoPlay) {
      video.play().catch(() => {
        // Autoplay failed, possibly due to browser policy
      });
    } else if (!isInView) {
      video.pause();
    }
  }, [isInView, isLoaded, autoPlay]);

  return (
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      muted={muted}
      loop={loop}
      playsInline={playsInline}
      controls={controls}
      preload={preload}
      style={style}
      // Force immediate loading
      onLoadStart={() => {
        if (videoRef.current) {
          videoRef.current.load();
        }
      }}
      // Additional optimizations
      webkit-playsinline="true"
      x5-playsinline="true"
      data-setup="{}"
    >
      <source src={src} type="video/mp4" />
      <source src={src.replace('.mp4', '.webm')} type="video/webm" />
      Your browser does not support the video tag.
    </video>
  );
};

export default OptimizedVideo; 