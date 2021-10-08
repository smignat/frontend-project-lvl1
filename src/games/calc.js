import getRandomNumber from '../index.js';

const getOperation = () => {
  const operations = ['+', '-', '*'];
  const operationIndex = getRandomNumber(0, 2);
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
    default:
      return undefined;
  }
};

const calcGame = () => {
  const gameDescription = 'What is the result of the expression?';
  const gameRound = () => {
    const operation = getOperation();
    const a = getRandomNumber();
    const b = getRandomNumber();
    const rightAnswer = getRightAnswer(a, b, operation);
    const question = `Question: ${a} ${operation} ${b}`;
    return { rightAnswer, question };
  };

  return { gameDescription, gameRound };
};

export default calcGame;
