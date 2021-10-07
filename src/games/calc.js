import readlineSync from 'readline-sync';
import { getRandomNumber, checkAnswer } from '../index.js';

const getOperation = () => {
  const operations = ['+', '-', '*', '/'];
  const operationIndex = getRandomNumber(3);
  return operations[operationIndex];
};

const getRightAnswer = (a, b, operation) => {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    default:
      return undefined;
  }
};

const startCalcGame = (name) => {
  let steps = 3;
  console.log('What is the result of the expression?');

  while (steps) {
    const operation = getOperation();
    const a = getRandomNumber();
    const b = getRandomNumber();
    const rightAnswer = getRightAnswer(a, b, operation);

    console.log(`Question: ${a} ${operation} ${b}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));

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

export default startCalcGame;
