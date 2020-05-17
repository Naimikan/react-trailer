const formatTime = (secondsNumber = 0) => {
  const secondsToProcess = parseInt((typeof secondsNumber === 'undefined' || Number.isNaN(secondsNumber)) ? 0 : secondsNumber, 10);

  const hours = Math.floor(secondsToProcess / 3600);
  const minutes = Math.floor(secondsToProcess / 60) % 60;
  const seconds = secondsToProcess % 60;

  return [hours, minutes, seconds]
    .map(v => (v < 10 ? `0${v}` : v))
    .filter((v, i) => v !== '00' || i > 0)
    .join(':');
};

export default formatTime;
