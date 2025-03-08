import launchGameEngine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  let i = 2;
  while (i <= num / 2) {
    if (num % i !== 0) {
      i += 1;
    } else {
      return false;
    }
  }

  return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

let correctAnswer = '';

const generateGameData = () => {
  const question = getRandomNumber(2, 200);

  if (isPrime(question)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }

  return [question, correctAnswer];
};

const sayPrimeOrNot = () => launchGameEngine(generateGameData, description);

export default sayPrimeOrNot;
