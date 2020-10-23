import { useContext } from 'react';

import VideoPlayerRefContext from '../../context/video-player-ref';

const useVideoPlayerRef = () => useContext(VideoPlayerRefContext);

export default useVideoPlayerRef;
