const calcBtn = document.getElementById('btnCalc');
const firstResultElement = document.getElementById('firstRoot');
const secondResultElement = document.getElementById('secondRoot');

const inputs = {
   a: document.getElementById('aInput'),
   b: document.getElementById('bInput'),
   c: document.getElementById('cInput'),
};
function quadEquationSolver(event) {
   event.preventDefault();
   let rootPart = Math.sqrt(
      Number(inputs.b.value) * Number(inputs.b.value) -
         4 * Number(inputs.a.value) * Number(inputs.c.value)
   );
   let denom = 2 * Number(inputs.a.value);
   let firstRootResult = (Number(-inputs.b.value) + rootPart) / denom;
   let secondRootResult = (Number(-inputs.b.value) - rootPart) / denom;

   if (isNaN(firstRootResult) || isNaN(secondRootResult)) {
      firstResultElement.innerText = 'The first root is Invalid';
      secondResultElement.innerText = 'The second root is Invalid';
   } else {
      firstResultElement.innerText = 'The first root is ' + firstRootResult.toFixed(1);
      secondResultElement.innerText = 'The second root is ' + secondRootResult.toFixed(1);
   }

   if (Object.keys(inputs).every((key) => !inputs[key].value)) {
      alert('Please assign a value to each variable \n נא למלא את הערכים של המשתנים');
      firstResultElement.innerText = 'Root1: ' + 0;
      secondResultElement.innerText = 'Root2: ' + 0;
   }
}
