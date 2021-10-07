import readlineSync from 'readline-sync';
import greetings, { getRandomNumber, checkAnswer } from '../index.js';

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

const startGcdGame = () => {
  const name = greetings();
  let rounds = 3;
  console.log('Find the greatest common divisor of given numbers.');
  // Как бы вынести этот while отдельно?
  while (rounds) {
    const a = getRandomNumber(1, 50);
    const b = getRandomNumber(1, 50);
    const rightAnswer = getGcd(a, b);

    console.log(`Question: ${a} ${b}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));

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

export default startGcdGame;
