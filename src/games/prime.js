import getRandomNumber from '../index.js';

const isPrime = (n) => !(n % 2);

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
