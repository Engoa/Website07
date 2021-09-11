(() => {
  // Draws Summary on checkout form at the bottom!
  const drawCartSummary = () => {
    Products.items.forEach((item, index) => {
      document.querySelector('.summary').innerHTML += `
    
    <div class="summary__item ${index % 2 !== 0 ? 'summary__item2' : ''}">
      <div class="summary__image blackitems">
        <img src="${item.image_dark}" alt="Product Image" />
      </div>
      <div class="summary__image whiteitems">
        <img src="${item.image_light}" alt="Product Image" />
      </div>
      <div class="summary__description">
        <h4>${item.name}</h4>
        <span class="summary--text">${item.price_us}</span>
      </div>
      <div class="summary__quantity">
        <h4>quantity</h4>
        <span class="summary--text">${Cart.computedItems.quantity}</span>
      </div>
    </div>
  
    `;
    });
  };
  drawCartSummary();

  /// Draw Summary total!!
  const summaryGrandTotal = document.querySelector('.summary__total');
  summaryGrandTotal.innerHTML = `
  
  <h3>GRAND TOTAL</h3>
  <span>$${Cart.grandTotal.toFixed(2)}</span>
  `;
  // Checkout Order confrimation drawing!

  const drawOrderConfirmation = () => {
    const checkOutConfirm = document.querySelector('.draworder-confirmation');
    Products.items.forEach((item) => {
      checkOutConfirm.innerHTML = `
  <div class="checkout-modal__bought-items modal__items">
      <div class="modal__item">
        <div class="modal__image whiteitems">
          <img src="${item.image_light}" alt="Item images" />
        </div>

        <div class="modal__image blackitems">
          <img src="${item.image_dark}" alt="Item images" />
        </div>

        <div class="modal__name">
          <a class="modal--link" href="#home"></a>
          <span>${item.name}</span>
        </div>

        <div class="modal__quantity">
          <p>QUANTITY</p>
          <p class="cart--quantity"><${item.quantity}/p>
        </div>
      </div>
    </div>
  `;
    });
  };

  drawOrderConfirmation();

  const checkOutModalOverlay = document.querySelector('.checkout--overlay');
  const checkOutModal = document.querySelector('.checkout--modal');
  const toggleCheckOutModal = () => {
    setTimeout(() => {
      checkOutModal.classList.toggle('checkout--modal--active');
      checkOutModalOverlay.classList.toggle('checkout--overlay--active');
    }, 300);
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
