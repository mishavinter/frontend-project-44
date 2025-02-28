import { mainEngine, getRandomNumber, isPrime } from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

let correctAnswer = '';

const generateGameData = () => {
  const question = getRandomNumber(2, 200);

  if (isPrime(question)) {
    correctAnswer = 'yes';
  }
  correctAnswer = 'no';

  return [question, correctAnswer];
};

const sayPrimeOrNot = () => mainEngine(generateGameData, description);

export default sayPrimeOrNot;
