(() => {
  const drawCartSummary = () => {
    document.querySelector('.summary').innerHTML = `
      <h3>Summary</h3>
    <div class="summary__item">
      <div class="summary__image">
        <img src="https://picsum.photos/100/100?grayscale" alt="Product Image" />
      </div>
      <div class="summary__description">
        <h4>Sony controller</h4>
        <span class="summary--text">$4324</span>
      </div>
      <div class="summary__quantity">
        <h4>quantity</h4>
        <span class="summary--text">x1</span>
      </div>
    </div>
    <div class="summary__finish">
      <div class="summary__total">
        <h3>GRAND TOTAL</h3>
        <span>2999$</span>
      </div>
    </div>
    <div class="summary__btn">
      <button type="submit">CONTINUE & PAY</button>
    </div>
    `;
  };
  console.log(document.querySelector('.summary'));
  drawCartSummary();
})();

// (() => {
//   const drawCartSummary = () => {
//     document.querySelector('.summary').innerHTML = Cart.computedItems.forEach(
//       (item, index) => {
//         `
//       <h3>Summary</h3>
//     <div class="summary__item">
//       <div class="summary__image">
//         <img src="${item.id}" alt="Product Image" />
//       </div>
//       <div class="summary__description">
//         <h4>Sony controller</h4>
//         <span class="summary--text">$4324</span>
//       </div>
//       <div class="summary__quantity">
//         <h4>quantity</h4>
//         <span class="summary--text">x1</span>
//       </div>
//     </div>
//     <div class="summary__finish">
//       <div class="summary__total">
//         <h3>GRAND TOTAL</h3>
//         <span>2999$</span>
//       </div>
//       <div class="summary__btn">
//         <button type="submit">CONTINUE & PAY</button>
//       </div>
//     </div>
//     `;
//       }
//     );
//   };
//   drawCartSummary();
// })();
