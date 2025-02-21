import mainEngine from '../index.js';

const description = 'What number is missing in the progression?';

const generateGameData = () => {
  const firstNumber = Math.floor(100 * Math.random());
  const diff = Math.ceil(31 * Math.random());
  const progression = [];
  const progressionLength = 10;

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstNumber + (i * diff));
  }

  const indexOfHiddenNumber = Math.floor(progressionLength * Math.random());
  const correctAnswer = progression[indexOfHiddenNumber].toString();
  progression[indexOfHiddenNumber] = '..';

  const question = progression.join(' ');

  return [question, correctAnswer];
};

const brainProgression = () => mainEngine(generateGameData, description);

export default brainProgression;
