import getRandomNumber from '../index.js';

const isPrime = (n) => {
  // Почитал, по идее должна работать и история с квадратом, а не только с делением
  for (let i = 2, k = Math.sqrt(n); i <= k; i += 1) {
    if (n % i === 0) return false;
  }
  return n > 1;
};

const primeGame = () => {
  const gameDescription = 'Answer "yes" if the number is prime, otherwise answer "no".';
  const gameRound = () => {
    const number = getRandomNumber(1, 50);
    const rightAnswer = isPrime(number) ? 'yes' : 'no';
    const question = `Question: ${number}`;
    return { rightAnswer, question };
  };

  return { gameDescription, gameRound };
};

export default primeGame;
