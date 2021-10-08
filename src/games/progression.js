import getRandomNumber from '../index.js';

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

const progressionGame = () => {
  const gameDescription = 'What number is missing in the progression?';

  const gameRound = () => {
    const progression = createProgression();
    const rightAnswer = createGap(progression);
    const question = `Question: ${progression.join(' ')}`;
    return { rightAnswer, question };
  };

  return { gameDescription, gameRound };
};

export default progressionGame;
