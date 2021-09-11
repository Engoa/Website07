(() => {
  // Draws Summary on checkout form at the bottom!
  const drawCartSummary = () =>
    (document.querySelector('.summary').innerHTML = Cart.computedItems.reduce(
      (cartItemsList, item, index) => {
        cartItemsList += `
    
    <div class="summary__item cart-row--${index} ${index % 2 !== 0 ? 'summary__item2' : ''}">
      <div class="summary__image blackitems">
        <img src="${item.image_dark}" alt="Product Image" />
      </div>
      <div class="summary__image whiteitems">
        <img src="${item.image_light}" alt="Product Image" />
      </div>
      <div class="summary__description">
        <h4>${item.name}</h4>
        <span class="summary--text">$${item.price_us}</span>
      </div>
      <div class="summary__quantity">
        <h4>quantity</h4>
        <span class="summary--text">${item.quantity}</span>
      </div>
    </div>
  
    `;
        return cartItemsList;
      },
      ''
    ));
  drawCartSummary();

  /// Draw Summary total!!
  const summaryGrandTotal = document.querySelector('.summary__total');
  summaryGrandTotal.innerHTML = `
  <h3>GRAND TOTAL</h3>
  <span>$${Number(Cart.grandTotal.toFixed(2)).toLocaleString()}</span>
   `;
  // Checkout Order confrimation drawing!

  const drawOrderConfirmation = () => {
    document.querySelector('.draworder-confirmation').innerHTML = Cart.computedItems.reduce(
      (cartItemsList, item, index) => {
        cartItemsList += `
  <div class="checkout-modal__bought-items modal__items cart-row--${index} ">
      <div class="modal__item">
        <div class="modal__image whiteitems">
          <img src="${item.image_light}" alt="Item images" />
        </div>

        <div class="modal__image blackitems">
          <img src="${item.image_dark}" alt="Item images" />
        </div>

        <div class="modal__name">
          <a class="modal--link" href="#home"></a>
           <a class="modal--link" href="#product?q=${item.id}">${item.name}</a>
          <span>${item.price_us}</span>
        </div>

        <div class="modal__quantity">
          <p>QUANTITY</p>
          <p class="cart--quantity">${item.quantity}</p>
        </div>
      </div>
     
    </div>
    `;

        return cartItemsList;
      },

      ''
    );
  };

  drawOrderConfirmation();

  // Draw Random Order ID!
  const randomOrderID = new Date().getTime().toString(36);
  const drawOrderID = () => {
    document.querySelector('.orderid').innerHTML = `
    <span>Order ID: ${randomOrderID}</span>
    `;
  };
  drawOrderID();

  //  Toggles for Checkout Modal!
  const checkOutModalOverlay = document.querySelector('.checkout--overlay');
  const checkOutModalContainer = document.querySelector('.checkout--modal');

  const CheckOutModal = {
    isOpen: false,

    close() {
      checkOutModalContainer.classList.remove('checkout--modal--active');
      checkOutModalOverlay.classList.remove('checkout--overlay--active');
      checkOutModalContainer.style.transition = 'all 500ms ease';
      this.isOpen = false;
    },

    open() {
      checkOutModalContainer.classList.add('checkout--modal--active');
      checkOutModalOverlay.classList.add('checkout--overlay--active');
      this.isOpen = true;
    },

    toggle() {
      if (this.isOpen) {
        CheckOutModal.close();
      } else {
        CheckOutModal.open();
      }
    },
  };

  const submitCheckOutForm = document.querySelector('.checkout--form');
  const exitCheckOutModal = document.querySelector('.checkout__exit');
  submitCheckOutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    CheckOutModal.toggle();
  });

  exitCheckOutModal.addEventListener('click', () => CheckOutModal.toggle());

  checkOutModalOverlay.addEventListener('click', () => {
    CheckOutModal.toggle();
  });
})();
