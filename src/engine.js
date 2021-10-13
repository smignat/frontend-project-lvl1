import readlineSync from 'readline-sync';

export const getUserName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  return name;
};

const getUserAnswer = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

const checkAnswer = (rightAnswer, userAnswer) => rightAnswer === userAnswer;

const startGame = (game, rounds = 3) => {
  const { gameDescription, gameRound } = game();
  const userName = getUserName();
  console.log(gameDescription);

  for (let i = 0; i < rounds; i += 1) {
    const { rightAnswer, question } = gameRound();
    console.log(question);
    const userAnswer = getUserAnswer();

    if (!(checkAnswer(rightAnswer, userAnswer))) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
