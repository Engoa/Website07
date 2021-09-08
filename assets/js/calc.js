(() => {
  const $result = $('#result__container__p');

  let result = 0;

  function getValue() {
    return Number(document.getElementById('container__input1').value);
  }

  // Should receive an operator, evaluate the result
  // and returns a number
  function calculate(operator) {
    if (!operator) return 0;
    return eval(`${result} ${operator} ${getValue()}`);
  }

  function handleCalculate(operator) {
    !getValue()
      ? alert('Input fields need to have some value')
      : (result = calculate(operator));
    $result.text('Result:  ' + result);
  }

  // Add
  $('#btnadd').click(() => handleCalculate('+'));

  //Substract
  $('#btnsubstract').click(() => handleCalculate('-'));

  //Multiply
  $('#btnmultiply').click(() => handleCalculate('*'));

  //Divide
  $('#btndivide').click(() => handleCalculate('/'));

  //Exponential
  $('#btnexponential').click(() => handleCalculate('**'));

  // Reset
  const resetBtn = document.getElementById('btnreset');
  resetBtn.addEventListener('click', () => {
    result = 'Result: ' + 0;
    $result.text(result);
  });

  // Prevents reload of page on click
  document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault();
  });

  // Prevents reload of page on click
})();
