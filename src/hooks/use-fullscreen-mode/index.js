import { useCallback, useEffect, useState } from 'react';

const useFullscreenMode = (element) => {
  const [isFullscreen, setIsFullscreen] = useState(!!document.fullscreenElement);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      element.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch((error) => {
        console.error(`Error attempting to enable full-screen mode: ${error.message} (${error.name})`);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      });
    }
  };

  const onFullscreenChange = useCallback(() => {
    setIsFullscreen(!!document.fullscreenElement);
  }, []);

  useEffect(() => {
    window.addEventListener('fullscreenchange', onFullscreenChange);

    return () => {
      window.removeEventListener('fullscreenchange', onFullscreenChange);
    };
  }, []);

  return [isFullscreen, toggleFullscreen];
};

export default useFullscreenMode;
