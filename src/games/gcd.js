import getRandomNumber from '../index.js';

const getGcd = (a, b) => {
  if (a !== 0) {
    return getGcd(b % a, a);
  }
  return b;
};

const gcdGame = () => {
  const gameDescription = 'Find the greatest common divisor of given numbers.';
  const gameRound = () => {
    const a = getRandomNumber(1, 50);
    const b = getRandomNumber(1, 50);
    const rightAnswer = String(getGcd(a, b));
    const question = `Question: ${a} ${b}`;
    return { rightAnswer, question };
  };

  return { gameDescription, gameRound };
};

export default gcdGame;
