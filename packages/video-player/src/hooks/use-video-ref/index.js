import { useContext } from 'react';

import VideoContext from '../../context';

const useVideoRef = () => useContext(VideoContext);

export default useVideoRef;
