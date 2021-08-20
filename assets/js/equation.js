const aInput = document.getElementById('aInput');
const bInput = document.getElementById('bInput');
const cInput = document.getElementById('cInput');
const calcBtn = document.getElementById('btnCalc');
const firstResultElement = document.getElementById('firstRoot');
const secondResultElement = document.getElementById('secondRoot');

function quadEquationSolver() {
   let rootPart = Math.sqrt(
      Number(bInput.value) * Number(bInput.value) - 4 * Number(aInput.value) * Number(cInput.value)
   );
   let denom = 2 * Number(aInput.value);
   let firstRootResult = (Number(-bInput.value) + rootPart) / denom;
   let secondRootResult = (Number(-bInput.value) - rootPart) / denom;

   if (isNaN(firstRootResult) || isNaN(secondRootResult)) {
      firstResultElement.innerText = 'The first root is Invalid';
      secondResultElement.innerText = 'The second root is Invalid';
   } else {
      firstResultElement.innerText = 'The first root is ' + firstRootResult.toFixed(1);
      secondResultElement.innerText = 'The second root is ' + secondRootResult.toFixed(1);
   }

   if (!aInput.value || !bInput.value || !cInput.value) {
      alert('Please assign a value to each variable \n נא למלא את הערכים של המשתנים');
      firstResultElement.innerText = 'Root1: ' + 0;
      secondResultElement.innerText = 'Root2: ' + 0;
   }
}

calcBtn.addEventListener('click', () => {
   quadEquationSolver();
});
