const firstInput = document.getElementById('container__input1');
const secondInput = document.getElementById('container__input2');
const calcBtn = document.getElementById('container__button');
const currentResult = document.getElementById('result__container__p');
const resetBtn = document.getElementById('container__reset');

function add() {
   currentResult.innerText =
      parseInt(firstInput.value) + parseInt(secondInput.value) + parseInt(currentResult.innerText);
}

function reset() {
   currentResult.innerText = 0;
}

function isEmpty() {
   if (firstInput.value.length == 0 || secondInput.value.length == 0) {
      currentResult.innerText = 0;
      alert('Input fields need to have some value \n נא למלא ערך כלשהו');
   }
   return;
}

// Event Listeners for buttons.
calcBtn.addEventListener('click', () => {
   add();
   isEmpty();
});

resetBtn.addEventListener('click', reset);
// Event Listeners for buttons.
