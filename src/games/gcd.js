import readlineSync from 'readline-sync';

const brainGCD = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('Find the greatest common divisor of given numbers.');

  let correctAnswer = 0;
  
  for (let i = 1; i <= 3; i += 1) {
    let firstNumber = Math.floor(100 * Math.random());
    let secondNumber = Math.floor(100 * Math.random());
  
    let minNumber = Math.min(firstNumber, secondNumber);

    for (let i = 1; i <= minNumber / 2; i += 1) {
      if (firstNumber % i === 0 && secondNumber % i === 0) {
        correctAnswer = i;
      }
    }
  
    console.log(`Question: ${firstNumber} ${secondNumber}`);
    let answer = readlineSync.question('Your answer: ');
  
    if (answer === correctAnswer.toString()) {
      console.log(`Correct!`);
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${userName}!`);
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};

export default brainGCD;
