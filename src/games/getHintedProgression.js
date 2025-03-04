import {
  mainEngine, getRandomNumber, getProgression, hideProgressionMember,
} from '../index.js';

const description = 'What number is missing in the progression?';

const generateGameData = () => {
  const progression = getProgression(10);

  const index = getRandomNumber(0, progression.length);
  const correctAnswer = progression[index].toString();

  const progressionWithHintedMember = hideProgressionMember(progression, index);
  const question = progressionWithHintedMember.join(' ');

  return [question, correctAnswer];
};

const getHintedProgression = () => mainEngine(generateGameData, description);

export default getHintedProgression;
