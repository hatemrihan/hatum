import React, { useEffect, useRef, useState } from 'react';

interface RobustVideoProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  controls?: boolean;
  preload?: string;
}

const RobustVideo: React.FC<RobustVideoProps> = ({
  src,
  className = '',
  autoPlay = true,
  muted = true,
  loop = true,
  playsInline = true,
  controls = false,
  preload = 'auto'
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Aggressive play function
  const attemptPlay = (video: HTMLVideoElement) => {
    if (!video || !autoPlay) return;
    
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          console.log('Video playing successfully');
        })
        .catch(error => {
          console.log('Play attempt failed, setting up interaction listeners:', error);
          
          // Multiple fallback strategies
          const playOnInteraction = () => {
            video.play().catch(err => console.log('Interaction play failed:', err));
          };
          
          // Add listeners for multiple interaction types
          const events = ['click', 'touchstart', 'touchend', 'scroll', 'mousemove', 'keydown'];
          events.forEach(eventType => {
            document.addEventListener(eventType, playOnInteraction, { once: true });
          });
          
          // Remove listeners after 10 seconds to prevent memory leaks
          setTimeout(() => {
            events.forEach(eventType => {
              document.removeEventListener(eventType, playOnInteraction);
            });
          }, 10000);
        });
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setIsLoaded(true);
      attemptPlay(video);
    };

    const handleCanPlay = () => {
      attemptPlay(video);
    };

    const handleLoadStart = () => {
      // Try to play as soon as loading starts
      setTimeout(() => attemptPlay(video), 50);
    };

    const handleError = () => {
      setError(true);
      console.log('Video loading error for:', src);
    };

    // Add all event listeners
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('error', handleError);

    // Force immediate load and play attempts
    video.load();
    
    // Multiple immediate play attempts with increasing delays
    if (autoPlay) {
      setTimeout(() => attemptPlay(video), 0);
      setTimeout(() => attemptPlay(video), 50);
      setTimeout(() => attemptPlay(video), 100);
      setTimeout(() => attemptPlay(video), 200);
      setTimeout(() => attemptPlay(video), 500);
    }

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('error', handleError);
    };
  }, [src, autoPlay]);

  // Intersection Observer for when video comes into view
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !autoPlay) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Aggressive play attempts when video becomes visible
            setTimeout(() => attemptPlay(video), 0);
            setTimeout(() => attemptPlay(video), 100);
            setTimeout(() => attemptPlay(video), 300);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    observer.observe(video);

    return () => {
      observer.unobserve(video);
    };
  }, [autoPlay]);

  // Additional effect to ensure video plays when component mounts
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !autoPlay) return;

    // Force play on component mount with multiple attempts
    const forcePlay = () => {
      if (video.readyState >= 2) { // HAVE_CURRENT_DATA
        attemptPlay(video);
      }
    };

    // Try every 100ms for the first 2 seconds
    const intervals: NodeJS.Timeout[] = [];
    for (let i = 0; i < 20; i++) {
      intervals.push(setTimeout(forcePlay, i * 100));
    }

    return () => {
      intervals.forEach(interval => clearTimeout(interval));
    };
  }, [autoPlay]);

  if (error) {
    return (
      <div className={`bg-gray-200 dark:bg-gray-800 flex items-center justify-center ${className}`}>
        <p className="text-gray-500 dark:text-gray-400">Video unavailable</p>
      </div>
    );
  }

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      playsInline={playsInline}
      controls={controls}
      preload={preload}
      webkit-playsinline="true"
      style={{
        opacity: isLoaded ? 1 : 0,
        transition: 'opacity 0.3s ease'
      }}
      onLoadedData={() => {
        const video = videoRef.current;
        if (video) attemptPlay(video);
      }}
      onCanPlay={() => {
        const video = videoRef.current;
        if (video) attemptPlay(video);
      }}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default RobustVideo; 