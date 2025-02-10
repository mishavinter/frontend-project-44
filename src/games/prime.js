import readlineSync from 'readline-sync';

const brainPrime = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let correctAnswer = '';
  
  for (let i = 1; i <= 3; i += 1) {
    const number = Math.floor(200 * Math.random());
  
    let j = 2;
    while (j <= number / 2) {
      if (number % j === 0) {
        correctAnswer = 'no';
        j = number;
      } else {
        correctAnswer = 'yes';
        j += 1;
      }
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

export default brainPrime;
