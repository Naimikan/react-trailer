import exenv from 'exenv';

const getSafeDocument = () => (exenv.canUseDOM ? document : {});

export default getSafeDocument;
