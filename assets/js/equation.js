(() => {
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
      firstResultElement.innerText = 'x1 is Invalid';
      secondResultElement.innerText = 'x2 is Invalid';
    } else {
      firstResultElement.innerText = 'x1: ' + firstRootResult.toFixed(1);
      secondResultElement.innerText = 'x2: ' + secondRootResult.toFixed(1);
    }

    if (Object.keys(inputs).some((key) => !inputs[key].value)) {
      alert('Please assign a value to each variable \n נא למלא את הערכים של המשתנים');
      firstResultElement.innerText = 'x1: ' + 0;
      secondResultElement.innerText = 'x2: ' + 0;
    }
  }

  form.addEventListener('submit', quadEquationSolver);

    animatePage('.input__container > *');
})();

// $('#Text').click(() => {
//   $('#Text').css('color', 'red');
// });

// const text = document.getElementById('text');
// text.addEventListener('click', () => {
//   text.style.color = 'red';
// });

// The same ^^^^^^^^^^
