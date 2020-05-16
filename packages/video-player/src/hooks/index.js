import { useContext, useEffect, useState } from 'react';

import { getVideoRefById } from '../helpers';

import VideoContext from '../context';

const useVideo = () => {
  const { id: videoId } = useContext(VideoContext);
  const videoRefById = getVideoRefById(videoId);

  console.log(videoRefById);
  // const [ref, setRef] = useState(videoRefById.current);

  // useEffect(() => {
  //   console.log(videoRefById, videoRefById.current);
  //   setRef(videoRefById.current);
  // }, [videoRefById]);

  // return [ref, setRef];
};

export {
  useVideo,
};
