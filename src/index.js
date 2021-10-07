import readlineSync from 'readline-sync';

export const greetings = () => {
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const checkAnswer = (rightAnswer, userAnswer) => {
  if (userAnswer === rightAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  return false;
};

export const getRandomNumber = (n = 10) => Math.floor(Math.random() * n) + 1;
