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

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  let i = 2;
  while (i <= num / 2) {
    if (num % i !== 0) {
      i += 1;
    } else {
      return false;
    }
  }

  return true;
};

const getGCD = (num1, num2) => {
  const minNumber = Math.min(num1, num2);
  const maxNumber = Math.max(num1, num2);
  let GCD = 1;
  if (minNumber === 0) {
    GCD = maxNumber;
  } else if (maxNumber % minNumber === 0) {
    GCD = minNumber;
  } else {
    for (let i = 1; i <= minNumber / 2; i += 1) {
      if (num1 % i === 0 && num2 % i === 0) {
        GCD = i;
      }
    }
  }
  return GCD.toString();
};

const getProgression = (length) => {
  const firstNumber = getRandomNumber(0, 100);
  const diff = getRandomNumber(1, 30);
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(firstNumber + (i * diff));
  }

  return progression;
};

const hideProgressionMember = (progression, index) => {
  const newProgression = progression;
  newProgression[index] = '..';

  return progression;
};

export {
  mainEngine,
  getRandomNumber,
  isEven,
  isPrime,
  getGCD,
  getProgression, hideProgressionMember,
};
