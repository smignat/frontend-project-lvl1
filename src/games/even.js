import readlineSync from 'readline-sync';
import { getRandomNumber, checkAnswer } from '../index.js';

const isEven = (num) => num % 2 === 0;

const startEvenGame = (name) => {
  let steps = 3;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (steps) {
    const number = getRandomNumber();
    const rightAnswer = isEven(number) ? 'yes' : 'no';

    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const isAnswered = checkAnswer(rightAnswer, userAnswer);

    if (isAnswered) {
      steps -= 1;
    } else {
      console.log(`Let's try again, ${name}!`);
      return false;
    }
  }
  console.log(`Congratulations, ${name}!`);
  return true;
};

export default startEvenGame;
