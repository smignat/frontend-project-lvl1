import readlineSync from 'readline-sync';

const getRandomNumber = () => Math.floor(Math.random() * 10) + 1;
const isEven = (num) => num % 2 === 0;

const startEvenGame = (name) => {
  let steps = 3;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (steps) {
    const number = getRandomNumber();
    const rightAnswer = isEven(number) ? 'yes' : 'no';

    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.');
      console.log(`Let's try again, ${name}!`);
      return false;
    }

    steps -= 1;
  }
  console.log(`Congratulations, ${name}!`);
  return true;
};

export default startEvenGame;
