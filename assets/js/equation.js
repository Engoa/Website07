const aInput = document.getElementById('aInput');
const bInput = document.getElementById('bInput');
const cInput = document.getElementById('cInput');
const calcBtn = document.getElementById('btnCalc');
const firstResultElement = document.getElementById('firstRoot');
const secondResultElement = document.getElementById('secondRoot');

// function equation() {
//    const rootPart = Math.sqrt(parseInt(b.value ** 2) - 4 * parseInt(a.value * c.value));
//    let denom = 2 * parseInt(a.value);
//    root1.innerText = parseInt(-b.value) + rootPart / denom;
//    root2.innerText = parseInt(-b.value) - rootPart / denom;
// }

calcBtn.addEventListener('click', quadEquationSolver);

function quadEquationSolver() {
   let rootPart = Math.sqrt(
      Number(bInput.value) * Number(bInput.value) - 4 * Number(aInput.value) * Number(cInput.value));
   let denom = 2 * Number(aInput.value);
   let firstRootResult = (Number(-bInput.value) + rootPart) / denom;
   let secondRootResult = (Number(-bInput.value) - rootPart) / denom;

   if (isNaN(firstRootResult) || isNaN(secondRootResult)) {
      firstResultElement.innerText = 'The first root is Invalid';
      secondResultElement.innerText = 'The second root is Invalid';
   } else {
      firstResultElement.innerText = 'The first root is ' + firstRootResult;
      secondResultElement.innerText = 'The second root is ' + secondRootResult;
   }
}
