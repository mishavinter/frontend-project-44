import { mainEngine, getRandomNumber, isEven } from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

let correctAnswer = '';

const generateGameData = () => {
  const question = getRandomNumber(0, 100);
  if (isEven(question)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }

  return [question, correctAnswer];
};

const sayEvenOrNot = () => mainEngine(generateGameData, description);

export default sayEvenOrNot;
