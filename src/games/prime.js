import readlineSync from 'readline-sync';
import { getRandomNumber, checkAnswer } from '../index.js';

const isPrime = (n) => {
  let counter = 2;
  while (counter < n) {
    if (n % counter === 0) return false;
    counter += 1;
  }
  return true;
};

const startPrimeGame = (name) => {
  let steps = 3;

  while (steps) {
    const number = getRandomNumber(50);
    const rightAnswer = isPrime(number) ? 'yes' : 'no';

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

export default startPrimeGame;
