(() => {
  const drawModal = () => {
    document.querySelector('.modal__items').innerHTML = Cart.computedItems.reduce(
      (cartItemsList, item, index) => {
        cartItemsList += `
      
      <div class="modal__item cart-row--${index}" >
      
          <div class="modal__image whiteitems">
            <img
              src="${item.image_light}"
              alt="Item images"/>
          </div>

          <div class="modal__image blackitems">
            <img
              src="${item.image_dark}"
              alt="Item images"/>
          </div>

          <div class="modal__name">
             <a class="modal--link" href="#product?q=${item.id}">${item.name}</a>
             <span>$${item.price_us}</span>
          </div>

          <div class="item--counts">

          <div class="add--modal"type>
            <button class='increment-quantity' type="button">
              <i class="fas fa-plus"></i>
            </button>
          </div>

          <div class="modal__quantity">
            <p class='cart--quantity'>${item.quantity}</p>
          </div>

        <div class="remove--modal">
          <button  class='decrement-quantity' type="button">
            <i class="fas fa-minus"></i>
          </button>
        </div>
      </div>
        </div> `;

        return cartItemsList;
      },
      ''
    );

    document.querySelector('.modal__total').innerHTML = `
     <h3>Total Cost</h3>
        <p class='totalcost'>$${Cart.grandTotal.toFixed(2)}</p>
          <a class='modal__btn product__cta' href="#checkout">Check Out</a>
     `;

    Cart.computedItems.forEach((item, index) => {
      // Increment function
      $(`.cart-row--${index} button.increment-quantity`).click(() =>
        Cart.incrementQuantity(item.id)
      );

      // Decrement function
      $(`.cart-row--${index} button.decrement-quantity`).click(() =>
        Cart.decrementQuantity(item.id)
      );
    });
  };

  drawModal();

  // Event dispatched on every cart update
  document.addEventListener('cart-update', drawModal);

  const cartModalOverlay = document.querySelector('#overlay--active');
  const cartModal = document.querySelector('#modal--active');

  const toggleModal = () => {
    cartModalOverlay.classList.toggle('overlay--active');
    cartModal.classList.toggle('modal--active');
  };

  const closeElements = document.querySelectorAll(
    '#cart, #modal--close, .modal--link, .modal__btn '
  );

  closeElements.forEach((el) => el.addEventListener('click', toggleModal));

  //
})();
