import { mainEngine, getRandomNumber } from '../index.js';

const getOperator = () => {
  const signArray = ['+', '-', '*'];
  const sign = signArray[getRandomNumber(0, signArray.length)];
  return sign;
};

const estimateResult = (num1, num2, sign) => {
  switch (sign) {
    case '+':
      return num1 + num2;
      break;

    case '-':
      return num1 - num2;
      break;

    case '*':
      return num1 * num2;
      break;

    default:
      throw new Error('unknown operator');
  }
};

const description = 'What is the result of the expression?';

let correctAnswer = 0;

const generateGameData = () => {
  const firstNumber = getRandomNumber(0, 100);
  const secondNumber = getRandomNumber(0, 100);
  const sign = getOperator();

  const question = `${firstNumber} ${sign} ${secondNumber}`;

  correctAnswer = estimateResult(firstNumber, secondNumber, sign).toString();

  return [question, correctAnswer];
};

const calculate = () => mainEngine(generateGameData, description);

export default calculate;
