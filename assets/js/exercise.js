const checkForRest = (number) => {
  for (let i = 0; i <= number; i++) {
    if (i % 3 === 0) {
      console.log(`First Function: ${i}`);
    }
  }
};
checkForRest(29);

const checkForNumbers = (num1, num2) => {
  for (let i = num1; i <= num2; i++) {
    console.log(`Second Function: ${i}`);
  }
};
checkForNumbers(11, 21);

const isNumberPrime = (num) => {
  for (let i = 2; i < num; i++)
    if (num % i === 0) {
      return 'Third function: ' + false;
    } else {
      return 'Third function: ' + true;
    }
};
console.log(isNumberPrime(372));

const sumFunction = (num1, num2) => {
  for (let i = num1; i <= num2; i++) {
    if (num1 % num2 === 0) {
      return 'Fourth function: ' + false;
    } else {
      return 'Fourth function: ' + true;
    }
  }
};
console.log(sumFunction(4, 12));

const loveNotLove = (n) => {
  for (let i = 0; i <= n; i++) {
    if (i % 2 == 0) {
      console.log(`Fifth function: Love Me ${i}`);
    } else {
      console.log(`Fifth function: Doesn't Love Me ${i}`);
    }
  }
};
loveNotLove(18);
