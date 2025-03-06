import launchGameEngine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const getOperator = () => {
  const signArray = ['+', '-', '*'];
  const sign = signArray[getRandomNumber(0, signArray.length)];
  return sign;
};

const estimateResult = (num1, num2, sign) => {
  switch (sign) {
    case '+':
      return num1 + num2;

    case '-':
      return num1 - num2;

    case '*':
      return num1 * num2;

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

const launchCalcGame = () => launchGameEngine(generateGameData, description);

export default launchCalcGame;
