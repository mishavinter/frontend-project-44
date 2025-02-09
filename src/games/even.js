import readlineSync from 'readline-sync';

const brainEven = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswer = '';
  
  for (let i = 1; i <= 3; i += 1) {
    let number = Math.floor(100 * Math.random());
  
    if (number % 2 === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
  
    console.log(`Question: ${number}`);
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

export default brainEven;
