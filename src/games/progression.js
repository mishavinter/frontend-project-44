import readlineSync from 'readline-sync';

const brainProgression = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('What number is missing in the progression?');

  let correctAnswer = 0;
  
  for (let i = 1; i <= 3; i += 1) {
    let firstNumber = Math.floor(100 * Math.random());
    let diff = Math.ceil(31 * Math.random());
    const progression = [];
    const progressionLength = 10;
  
    for (let i = 0; i < progressionLength; i += 1) {
      progression.push(firstNumber + (i * diff));
    }

    const indexOfHiddenNumber = Math.floor(progressionLength * Math.random());
    correctAnswer = progression[indexOfHiddenNumber];
    progression[indexOfHiddenNumber] = '..';
  
    console.log(`Question: ${progression.join(' ')}`);
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

export default brainProgression;
