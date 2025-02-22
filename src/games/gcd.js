import mainEngine from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

let correctAnswer = 0;

const generateGameData = () => {
  const firstNumber = Math.floor(100 * Math.random());
  const secondNumber = Math.floor(100 * Math.random());

  const minNumber = Math.min(firstNumber, secondNumber);
  const maxNumber = Math.max(firstNumber, secondNumber);

  const question = `${firstNumber} ${secondNumber}`;

  if (minNumber === 0) {
    correctAnswer = maxNumber;
  } else if (maxNumber % minNumber === 0) {
    correctAnswer = minNumber;
  } else {
    for (let i = 1; i <= minNumber / 2; i += 1) {
      if (firstNumber % i === 0 && secondNumber % i === 0) {
        correctAnswer = i;
      }
    }
  }

  correctAnswer = correctAnswer.toString();

  return [question, correctAnswer];
};

const brainGCD = () => mainEngine(generateGameData, description);

export default brainGCD;
