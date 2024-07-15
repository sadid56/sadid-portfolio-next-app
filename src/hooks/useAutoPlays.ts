
import { useEffect, useRef } from 'react';

const useVideoPlayer = (videoSrc: string) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => {
        // Handle autoplay error, if any
        console.error('Autoplay error:', error);
      });
    }
  }, [videoSrc]);

  return videoRef;
};

export default useVideoPlayer;
