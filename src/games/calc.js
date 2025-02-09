import readlineSync from 'readline-sync';

const brainCalc = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('What is the result of the expression?');

  const signArray = ['+', '-', '*'];
  let sign = '';
  let correctAnswer = 0;
  
  for (let i = 1; i <= 3; i += 1) {
    let firstNumber = Math.floor(100 * Math.random());
    let secondNumber = Math.floor(100 * Math.random());
    let sign = signArray[Math.floor(signArray.length * Math.random())];
  
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
  
    console.log(`Question: ${firstNumber} ${sign} ${secondNumber}`);
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

export default brainCalc;
