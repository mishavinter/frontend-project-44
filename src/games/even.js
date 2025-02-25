import mainEngine from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

let correctAnswer = '';

const generateGameData = () => {
  const question = Math.floor(100 * Math.random());
  if (question % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }

  return [question, correctAnswer];
};

const brainEven = () => mainEngine(generateGameData, description);

export default brainEven;
