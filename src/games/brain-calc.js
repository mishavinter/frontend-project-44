import launchGameEngine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const getOperator = () => {
  const signArray = ['+', '-', '*'];
  const index = getRandomNumber(0, signArray.length);
  const sign = signArray[index];
  return sign;
};

const calculate = (num1, num2, sign) => {
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

const generateGameData = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const sign = getOperator();

  const question = `${firstNumber} ${sign} ${secondNumber}`;

  const correctAnswer = calculate(firstNumber, secondNumber, sign).toString();

  return [question, correctAnswer];
};

const launchCalcGame = () => launchGameEngine(generateGameData, description);

export default launchCalcGame;
