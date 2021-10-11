import getRandomNumber from '../index.js';

const createProgression = (progressionLength, gap) => {
  const progressionStep = getRandomNumber(1, 10);
  const progression = [progressionStep];

  for (let i = 1; i < progressionLength; i += 1) {
    progression[i] = progression[i - 1] + progressionStep;
  }

  const rightAnswer = String(progression[gap]);
  progression[gap] = '..';

  return { progression, rightAnswer };
};

const createGap = (max) => {
  const gapPosition = getRandomNumber(0, max - 1);
  return gapPosition;
};

const progressionGame = () => {
  const gameDescription = 'What number is missing in the progression?';

  const gameRound = () => {
    const progressionLength = getRandomNumber(5, 15);
    const gapPosition = createGap(progressionLength);
    const { progression, rightAnswer } = createProgression(progressionLength, gapPosition);
    const question = `Question: ${progression.join(' ')}`;
    return { rightAnswer, question };
  };

  return { gameDescription, gameRound };
};

export default progressionGame;
