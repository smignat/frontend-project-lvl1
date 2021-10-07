import readlineSync from 'readline-sync';
import greetings, { getRandomNumber, checkAnswer } from '../index.js';

const isPrime = (n) => {
  let counter = 2;
  while (counter < n) {
    if (n % counter === 0) return false;
    counter += 1;
  }
  return true;
};

const startPrimeGame = () => {
  const name = greetings();
  let rounds = 3;
  // Как бы вынести этот while отдельно?
  while (rounds) {
    const number = getRandomNumber(1, 50);
    const rightAnswer = isPrime(number) ? 'yes' : 'no';

    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const isAnswered = checkAnswer(rightAnswer, userAnswer);

    if (isAnswered) {
      rounds -= 1;
    } else {
      console.log(`Let's try again, ${name}!`);
      return false;
    }
  }
  console.log(`Congratulations, ${name}!`);
  return true;
};

export default startPrimeGame;
