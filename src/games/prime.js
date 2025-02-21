import mainEngine from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

let correctAnswer = 'yes';

const generateGameData = () => {
  const question = Math.floor(200 * Math.random());

  let i = 2;
  while (i <= question / 2) {
    if (question % i === 0) {
      correctAnswer = 'no';
      i += 200;
    }
    i += 1;
  }

  return [question, correctAnswer];
};

const brainPrime = () => mainEngine(generateGameData, description);

export default brainPrime;
