import getRandomNumber from '../index.js';

const operations = ['+', '-', '*'];

const getOperation = () => {
  const operationsIndexesCounter = operations.length - 1;
  const currentOperationIndex = getRandomNumber(0, operationsIndexesCounter);
  return operations[currentOperationIndex];
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
    const rightAnswer = String(getRightAnswer(a, b, operation));
    const question = `Question: ${a} ${operation} ${b}`;
    return { rightAnswer, question };
  };

  return { gameDescription, gameRound };
};

export default calcGame;
