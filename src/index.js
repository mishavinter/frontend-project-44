import readlineSync from 'readline-sync';

const mainEngine = (generateGameData, description) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  
  console.log(description);

  let roundCount = 3;

  for (let i = 1; i <= roundCount; i += 1) {
    const [question, correctAnswer] = generateGameData();
  
    console.log(`Question: ${question}`);
    let answer = readlineSync.question('Your answer: ');
  
    if (answer === correctAnswer) {
      console.log(`Correct!`);
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default mainEngine;