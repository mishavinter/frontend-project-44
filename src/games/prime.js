import mainEngine from "../index.js";

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

let correctAnswer = 'yes';
  
const generateGameData = () => {
  const question = Math.floor(200 * Math.random());

  for (let i = 2; i <= question / 2; i += 1) {
    if (question % i === 0) {
      correctAnswer = 'no';
     }
  }

return [question, correctAnswer];
};

const brainPrime = () => mainEngine(generateGameData, description);

export default brainPrime;
