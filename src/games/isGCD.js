import launchGameEngine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const getGCD = (num1, num2) => {
  const minNumber = Math.min(num1, num2);
  const maxNumber = Math.max(num1, num2);
  let gcd = 1;
  if (minNumber === 0) {
    gcd = maxNumber;
  } else if (maxNumber % minNumber === 0) {
    gcd = minNumber;
  } else {
    for (let i = 1; i <= minNumber / 2; i += 1) {
      if (num1 % i === 0 && num2 % i === 0) {
        gcd = i;
      }
    }
  }
  return gcd;
};

const description = 'Find the greatest common divisor of given numbers.';

let correctAnswer = 0;

const generateGameData = () => {
  const firstNumber = getRandomNumber(0, 100);
  const secondNumber = getRandomNumber(0, 100);

  const question = `${firstNumber} ${secondNumber}`;

  correctAnswer = getGCD(firstNumber, secondNumber).toString();

  return [question, correctAnswer];
};

const isGCD = () => launchGameEngine(generateGameData, description);

export default isGCD;
