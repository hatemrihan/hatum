"use client";

import React, { useRef, useEffect } from 'react';

interface SimpleVideoProps {
  src: string;
  className?: string;
  poster?: string;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  controls?: boolean;
  autoPlay?: boolean;
  preload?: 'none' | 'metadata' | 'auto';
}

const SimpleVideo: React.FC<SimpleVideoProps> = ({
  src,
  className = '',
  poster,
  muted = true,
  loop = true,
  playsInline = true,
  controls = false,
  autoPlay = true,
  preload = 'auto',
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Simple autoplay logic
    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        console.log('Video autoplay failed:', error);
      }
    };

    // Try to play when video loads
    video.addEventListener('loadeddata', playVideo);
    video.addEventListener('canplay', playVideo);

    // Fallback: try to play after a short delay
    const timeoutId = setTimeout(playVideo, 100);

    return () => {
      video.removeEventListener('loadeddata', playVideo);
      video.removeEventListener('canplay', playVideo);
      clearTimeout(timeoutId);
    };
  }, []);

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
      autoPlay={autoPlay}
      // Additional attributes for better compatibility
      webkit-playsinline="true"
      x5-playsinline="true"
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default SimpleVideo; 