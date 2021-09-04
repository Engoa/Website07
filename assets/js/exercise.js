const checkForRest = (num) => {
  for (let i = 0; i <= num; i++) {
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

function isPrimeNumber(num) {
  let isPrime = true;
  if (num === 1) {
    console.log(`1 is not a valid number to check for Prime`);
    return;
  }
  if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
  }
  if (isPrime) {
    console.log(`Third Function: ${num} Is a prime number`);
  } else {
    console.log(`Third Function: ${num} Is not a prime number`);
  }
}
isPrimeNumber(9);

const sumFunction = (num1, num2) => {
  for (let i = num1; i <= num2; i++) {
    if (num1 % num2 === 0) {
      return false;
    } else {
      return true;
    }
  }
};
console.log(`Fourth Function: ` + sumFunction(5, 12));

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
