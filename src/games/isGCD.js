import { mainEngine, getRandomNumber, getGCD } from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

let correctAnswer = 0;

const generateGameData = () => {
  const firstNumber = getRandomNumber(0, 100);
  const secondNumber = getRandomNumber(0, 100);

  const question = `${firstNumber} ${secondNumber}`;

  correctAnswer = getGCD(firstNumber, secondNumber);

  return [question, correctAnswer];
};

const isGCD = () => mainEngine(generateGameData, description);

export default isGCD;
