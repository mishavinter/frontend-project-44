import { mainEngine, getRandomNumber } from '../index.js';

const description = 'What is the result of the expression?';

const signArray = ['+', '-', '*'];
let correctAnswer = 0;

const generateGameData = () => {
  const firstNumber = getRandomNumber(0, 100);
  const secondNumber = getRandomNumber(0, 100);
  const sign = signArray[Math.floor(signArray.length * Math.random())];

  const question = `${firstNumber} ${sign} ${secondNumber}`;

  switch (sign) {
    case '+':
      correctAnswer = firstNumber + secondNumber;
      break;

    case '-':
      correctAnswer = firstNumber - secondNumber;
      break;

    default:
      correctAnswer = firstNumber * secondNumber;
  }
  correctAnswer = correctAnswer.toString();

  return [question, correctAnswer];
};

const calculate = () => mainEngine(generateGameData, description);

export default calculate;
