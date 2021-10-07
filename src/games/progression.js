import readlineSync from 'readline-sync';
import { getRandomNumber, checkAnswer } from '../index.js';

const createProgression = () => {
  const progressionLength = getRandomNumber(5, 15);
  const progressionStep = getRandomNumber(1, 10);
  const progression = [progressionStep];
  for (let i = 1; i < progressionLength; i += 1) {
    progression[i] = progression[i - 1] + progressionStep;
  }
  return progression;
};

const createGap = (coll) => {
  const gapPosition = getRandomNumber(0, coll.length - 1);
  const deletedElement = coll[gapPosition];
  // eslint-disable-next-line no-param-reassign
  coll[gapPosition] = '..';
  return deletedElement;
};

const startProgressionGame = (name) => {
  let steps = 3;
  console.log('What number is missing in the progression?');
  while (steps) {
    const progression = createProgression();

    const rightAnswer = createGap(progression);
    console.log(`Question: ${progression.join(' ')}`);
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

export default startProgressionGame;
