import { useContext, useEffect, useState } from 'react';

import { getVideoRefById } from '../helpers';

import VideoContext from '../context';

const useVideoRef = (id) => {
  const videoRefById = getVideoRefById(id);
  const [ref, setRef] = useState(videoRefById.current);

  useEffect(() => {
    setRef(videoRefById.current);
  }, [videoRefById]);

  return [ref, setRef];
};

const useVideoId = () => {
  const { id: videoId } = useContext(VideoContext);

  return videoId;
};

export {
  useVideoId,
  useVideoRef,
};
