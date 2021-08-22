(() => {
   const firstInput = document.getElementById('container__input1');
   const secondInput = document.getElementById('container__input2');
   const calcBtn = document.getElementById('container__button');
   const resultElement = document.getElementById('result__container__p');
   const resetBtn = document.getElementById('container__reset');

   function add() {
      if (!firstInput.value && !secondInput.value) {
         alert('Input fields need to have some value');
      } else {
         const result = +firstInput.value + +secondInput.value + +resultElement.innerText;
         resultElement.innerText = result.toFixed(1);
      }
   }

   function reset() {
      resultElement.innerText = 0;
   }

   // Event Listeners for buttons.

   document.getElementById('form').addEventListener('submit', (event) => {
      event.preventDefault();
      add();
   });

   resetBtn.addEventListener('click', reset);
   // Event Listeners for buttons.
})();
