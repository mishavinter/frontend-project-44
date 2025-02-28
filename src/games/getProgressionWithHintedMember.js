import { mainEngine, getRandomNumber } from '../index.js';

const description = 'What number is missing in the progression?';

const generateGameData = () => {
  const firstNumber = getRandomNumber(0, 100);
  const diff = getRandomNumber(1, 30);
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

const getProgressionWithHintedMember = () => mainEngine(generateGameData, description);

export default getProgressionWithHintedMember;
