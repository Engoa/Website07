(() => {
  const $result = $('#result__container__p');
  // Flag if result is shown on screen
  let isShown = false;
  // Hide result on load
  $result.hide();

  let result = 0;

  function getValue() {
    return Number(document.getElementById('container__input1').value);
  }

  function fadeIn() {
    if (!isShown) {
      $result.fadeIn();
      isShown = true;
    }
  }

  function fadeOut() {
    if (isShown) {
      $result.fadeOut();
      isShown = false;
    }
  }

  // Should receive an operator, evaluate the result
  // and returns a number
  function calculate(operator) {
    if (!operator) return 0;
    return eval(`${result} ${operator} ${getValue()}`);
  }

  function handleCalculate(operator) {
    // Show result if not shown
    fadeIn();
    !getValue()
      ? alert('Input fields need to have some value')
      : (result = calculate(operator));
    $result.text(result);
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
    result = 0;
    $result.text(result);
    fadeOut();
  });

  // Prevents reload of page on click
  document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault();
  });
  // Prevents reload of page on click
})();
