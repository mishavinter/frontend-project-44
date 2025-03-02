import { mainEngine, getRandomNumber, getOperator } from '../index.js';

const description = 'What is the result of the expression?';

let correctAnswer = 0;

const generateGameData = () => {
  const firstNumber = getRandomNumber(0, 100);
  const secondNumber = getRandomNumber(0, 100);
  const sign = getOperator();

  const question = `${firstNumber} ${sign} ${secondNumber}`;

  switch (sign) {
    case '+':
      correctAnswer = firstNumber + secondNumber;
      break;

    case '-':
      correctAnswer = firstNumber - secondNumber;
      break;

    case '*':
      correctAnswer = firstNumber * secondNumber;
      break;

    default:
      throw new Error('unknown operator');
  }
  correctAnswer = correctAnswer.toString();

  return [question, correctAnswer];
};

const calculate = () => mainEngine(generateGameData, description);

export default calculate;
