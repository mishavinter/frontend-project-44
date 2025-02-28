import readlineSync from 'readline-sync';

const mainEngine = (generateGameData, description) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(description);

  const roundCount = 3;

  for (let i = 1; i <= roundCount; i += 1) {
    const [question, correctAnswer] = generateGameData();

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

const getRandomNumber = (min, max) => Math.floor((max - min) * Math.random() + min);

const isPrime = (num) => {
  if (num < 2) {
    return false;
  } else if (num === 2) {
    return true;
  } else {
    let i = 2;
    while (i <= num / 2) {
      if (num % i !== 0) {
        i += 1;
      } else {
        return false;
      }
    }
  }
  return true;
};

export { mainEngine, getRandomNumber, isPrime };
