import launchGameEngine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const getProgression = (firstMember, diff, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(firstMember + (i * diff));
  }

  return progression;
};

const hideProgressionMember = (progression, index) => {
  const headOfProgression = progression.slice(0, index);
  const tailOfProgression = progression.slice(index + 1);
  let hintedProgression = [];
  if (index < progression.length - 1) {
    hintedProgression = [...headOfProgression, '..', ...tailOfProgression];
  } else {
    hintedProgression = [...headOfProgression, '..'];
  }

  return hintedProgression;
};

const description = 'What number is missing in the progression?';

const generateGameData = () => {
  const firstMember = getRandomNumber();
  const diff = getRandomNumber(1, 30);
  const length = 10;
  const progression = getProgression(firstMember, diff, length);

  const index = getRandomNumber(0, progression.length - 1);
  const correctAnswer = progression[index].toString();

  const progressionWithHintedMember = hideProgressionMember(progression, index);
  const question = progressionWithHintedMember.join(' ');

  return [question, correctAnswer];
};

const getHintedProgression = () => launchGameEngine(generateGameData, description);

export default getHintedProgression;
