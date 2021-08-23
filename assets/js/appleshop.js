const amountOfKgElement = document.getElementById('kg');
const totalResultElement = document.getElementById('totalresult');
const dropDownMenu = document.getElementById('dropdown');
const calcBtn = document.getElementById('btncalc');
const formElement = document.querySelector('form');
const resetBtn = document.getElementById('btnreset');

let userSelected = 0,
   currentResult = 0;

dropDownMenu.addEventListener('change', (e) => {
   userSelected = +e.target.value;
});

formElement.addEventListener('submit', (e) => {
   e.preventDefault();
   if (isNaN(currentResult) || amountOfKgElement.value <= 0) return;
   currentResult += Number(userSelected * amountOfKgElement.value);
   totalResultElement.innerText = currentResult.toFixed(2);
});

function reset() {
   currentResult = 0;
   totalResultElement.innerText = currentResult;
}

resetBtn.addEventListener('click', () => {
   currentResult = 0;
   totalResultElement.innerText = currentResult;
});
