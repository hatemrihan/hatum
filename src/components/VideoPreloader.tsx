"use client";

import { useEffect } from 'react';

interface VideoPreloaderProps {
  videos: string[];
}

const VideoPreloader: React.FC<VideoPreloaderProps> = ({ videos }) => {
  useEffect(() => {
    const preloadVideo = (src: string) => {
      const video = document.createElement('video');
      video.preload = 'metadata';
      video.muted = true;
      video.playsInline = true;
      video.style.display = 'none';
      
      // Start loading the video
      video.src = src;
      video.load();
      
      // Cleanup when component unmounts
      return () => {
        video.remove();
      };
    };

    // Preload all videos with a delay to avoid blocking the main thread
    const cleanupFunctions = videos.map((video, index) => {
      const timeoutId = setTimeout(() => {
        return preloadVideo(video);
      }, index * 100); // Stagger the preloading

      return () => {
        clearTimeout(timeoutId);
      };
    });

    return () => {
      cleanupFunctions.forEach(cleanup => cleanup && cleanup());
    };
  }, [videos]);

  return null; // This component doesn't render anything
};

export default VideoPreloader; 