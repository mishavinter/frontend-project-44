import mainEngine from "../index.js";

const description = 'What is the result of the expression?';

const signArray = ['+', '-', '*'];
let correctAnswer = 0;
  
const generateGameData = () => {
  const firstNumber = Math.floor(100 * Math.random());
  const secondNumber = Math.floor(100 * Math.random());
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
      correctAnswer = firstNumber * secondNumber
  }
  correctAnswer = correctAnswer.toString();

return [question, correctAnswer];
};

const brainCalc = () => mainEngine(generateGameData, description);

export default brainCalc;

