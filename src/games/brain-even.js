import launchGameEngine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const isEven = (num) => num % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

let correctAnswer = '';

const generateGameData = () => {
  const question = getRandomNumber();
  if (isEven(question)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }

  return [question, correctAnswer];
};

const sayEvenOrNot = () => launchGameEngine(generateGameData, description);

export default sayEvenOrNot;
