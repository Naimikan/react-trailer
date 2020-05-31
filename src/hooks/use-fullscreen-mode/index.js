import { useCallback, useEffect, useState } from 'react';

import getSafeDocument from '../../helpers/get-safe-document';

const useFullscreenMode = (element) => {
  const [isFullscreen, setIsFullscreen] = useState(!!getSafeDocument().fullscreenElement);

  const toggleFullscreen = () => {
    if (!getSafeDocument().fullscreenElement) {
      element.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch((error) => {
        console.error(`Error attempting to enable full-screen mode: ${error.message} (${error.name})`);
      });
    } else {
      getSafeDocument().exitFullscreen().then(() => {
        setIsFullscreen(false);
      });
    }
  };

  const onFullscreenChange = useCallback(() => {
    setIsFullscreen(!!getSafeDocument().fullscreenElement);
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
