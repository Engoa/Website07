(() => {
  const drawCartSummary = () => {
    document.querySelector('.summary').innerHTML = `
      <h3>Summary</h3>
    <div class="summary__item">
      <div class="summary__image blackitems">
        <img src="/assets/images/controller.png" alt="Product Image" />
      </div>
      <div class="summary__image whiteitems">
        <img src="/assets/images/controller2.png" alt="Product Image" />
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
  drawCartSummary();
  const checkOutModalOverlay = document.querySelector('.checkout--overlay');
  const checkOutModal = document.querySelector('.checkout--modal');
  const toggleCheckOutModal = () => {
    checkOutModalOverlay.classList.toggle('checkout--overlay--active');
    checkOutModal.classList.toggle('checkout--modal--active');
  };

  const checkOutForm = document.querySelector('.checkout--form');
  checkOutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    toggleCheckOutModal();
  });

  const checkOutExit = document.querySelector('.checkout__exit');
  checkOutExit.addEventListener('click', () => {
    toggleCheckOutModal();
  });
})();
