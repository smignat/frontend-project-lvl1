import getRandomNumber from '../index.js';

const createProgression = (progressionLength, gap) => {
  const progression = [];
  const progressionStep = getRandomNumber(1, 10);
  const firstStep = progressionStep;
  const rightAnswer = String(firstStep + progressionStep * gap);

  for (let i = 0; i < progressionLength; i += 1) {
    progression[i] = i !== gap ? firstStep + progressionStep * i : '..';
  }

  return { progression, rightAnswer };
};

const getGapPosition = (progressionLength) => getRandomNumber(0, progressionLength - 1);

const progressionGame = () => {
  const gameDescription = 'What number is missing in the progression?';
  const minProgressionLength = 5;
  const maxProgressionLength = 15;

  const gameRound = () => {
    const progressionLength = getRandomNumber(minProgressionLength, maxProgressionLength);
    const gapPosition = getGapPosition(progressionLength);
    const { progression, rightAnswer } = createProgression(progressionLength, gapPosition);
    const question = `Question: ${progression.join(' ')}`;
    return { rightAnswer, question };
  };

  return { gameDescription, gameRound };
};

export default progressionGame;
