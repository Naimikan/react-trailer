import React from 'react';

const videoRefs = {};

const createNewVideoRef = (id) => {
  const newRef = React.createRef();

  videoRefs[id] = newRef;

  return newRef;
};

const getVideoRefById = id => videoRefs[id];

export {
  createNewVideoRef,
  getVideoRefById,
};
