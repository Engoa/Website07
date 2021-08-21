(() => {
   const firstInput = document.getElementById('container__input1');
   const secondInput = document.getElementById('container__input2');
   const calcBtn = document.getElementById('container__button');
   const resultElement = document.getElementById('result__container__p');
   const resetBtn = document.getElementById('container__reset');

   function add() {
      const result = +firstInput.value + +secondInput.value + +resultElement.innerText;
      resultElement.innerText = result.toFixed(2);
   }

   function isEmpty() {
      if (!firstInput.value || !secondInput.value) {
         resultElement.innerText = 0;
         alert('Input fields need to have some value \n נא למלא ערך כלשהו');
      }
   }

   function reset() {
      resultElement.innerText = 0;
   }

   // Event Listeners for buttons.

   document.getElementById('form').addEventListener('submit', (event) => {
      event.preventDefault();
      add();
      isEmpty();
   });

   resetBtn.addEventListener('click', reset);
   // Event Listeners for buttons.
})();
