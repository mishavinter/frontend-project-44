import { launchGameEngine, getRandomNumber } from '../index.js';

const getProgression = (length) => {
  const firstNumber = getRandomNumber(0, 100);
  const diff = getRandomNumber(1, 30);
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(firstNumber + (i * diff));
  }

  return progression;
};

const hideProgressionMember = (progression, index) => {
  const newProgression = progression;
  newProgression[index] = '..';

  return progression;
};

const description = 'What number is missing in the progression?';

const generateGameData = () => {
  const progression = getProgression(10);

  const index = getRandomNumber(0, progression.length);
  const correctAnswer = progression[index].toString();

  const progressionWithHintedMember = hideProgressionMember(progression, index);
  const question = progressionWithHintedMember.join(' ');

  return [question, correctAnswer];
};

const getHintedProgression = () => launchGameEngine(generateGameData, description);

export default getHintedProgression;
