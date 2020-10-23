import { useContext } from 'react';

import VideoRefContext from '../../context/video-ref';

const useVideoRef = () => useContext(VideoRefContext);

export default useVideoRef;
