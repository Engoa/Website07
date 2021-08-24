(() => {
   // Event Listeners for buttons with functions nested!

   const $result = $('#result__container__p');
   // Flag if result is shown on screen
   let isShown = false;
   // Hide result on load
   $result.hide();

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
   function handleCalculate(operator) {
      // Show result if now shown
      fadeIn();
      if (!getValue()) {
         alert('Input fields need to have some value');
      } else {
         result = calculate(operator);
         $result.text(result);
      }
   }

   // Add
   $('#btnadd').click(() => handleCalculate('+'));
   //Substract
   $('#btnsubstract').click(() => handleCalculate('-'));
   //Multiply
   $('#btnmultiply').click(() => handleCalculate('*'));
   //Divide
   $('#btndivide').click(() => handleCalculate('/'));
   //Substract

   // Prevents reload of page on click
   document.getElementById('form').addEventListener('submit', (event) => {
      event.preventDefault();
   });
   // Prevents reload of page on click

   // Reset
   const resetBtn = document.getElementById('btnreset');
   resetBtn.addEventListener('click', () => {
      result = 0;
      $result.text(result);
      fadeOut();
   });
   // Reset

   // Event Listeners for buttons with functions nested!
})();
