import launchGameEngine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const getOperator = () => {
  const signArray = ['+', '-', '*'];
  const index = getRandomNumber(0, signArray.length);
  const sign = signArray[index];
  return sign;
};

const operateOnTwoNums = (num1, num2, sign) => {
  switch (sign) {
    case '+':
      return num1 + num2;

    case '-':
      return num1 - num2;

    case '*':
      return num1 * num2;

    default:
      throw new Error(`unknown operator: ${sign}`);
  }
};

const description = 'What is the result of the expression?';

let correctAnswer = 0;

const generateGameData = () => {
  const firstNumber = getRandomNumber(0, 100);
  const secondNumber = getRandomNumber(0, 100);
  const sign = getOperator();

  const question = `${firstNumber} ${sign} ${secondNumber}`;

  correctAnswer = operateOnTwoNums(firstNumber, secondNumber, sign).toString();

  return [question, correctAnswer];
};

const launchCalcGame = () => launchGameEngine(generateGameData, description);

export default launchCalcGame;
