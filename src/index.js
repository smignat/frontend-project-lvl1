const getRandomNumber = (min = 1, max = 10) => {
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
};

export default getRandomNumber;
