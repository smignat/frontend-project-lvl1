import getRandomNumber from '../index.js';

const isEven = (num) => !(num % 2);

const evenGame = () => {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  const gameRound = () => {
    const number = getRandomNumber();
    const rightAnswer = isEven(number) ? 'yes' : 'no';
    const question = `Question: ${number}`;
    return { rightAnswer, question };
  };

  return { gameDescription, gameRound };
};

export default evenGame;
