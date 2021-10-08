import getRandomNumber from '../index.js';

const getGcd = (a, b) => {
  const min = a < b ? a : b;
  let gcd = 1;
  for (let i = gcd; i <= min; i += 1) {
    if (a % i === 0 && b % i === 0) {
      gcd = i;
    }
  }
  return gcd;
};

const gcdGame = () => {
  const gameDescription = 'Find the greatest common divisor of given numbers.';
  const gameRound = () => {
    const a = getRandomNumber(1, 50);
    const b = getRandomNumber(1, 50);
    const rightAnswer = getGcd(a, b);
    const question = `Question: ${a} ${b}`;
    return { rightAnswer, question };
  };

  return { gameDescription, gameRound };
};

export default gcdGame;
