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
             <a href="#product?q=${item.id}" class="modal--link">${item.name}</a>
             <span>${item.price_us}</span>
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
  const cartBtn = document.querySelector('#cart');
  const closeModal = document.querySelector('#modal--close');
  const modalItemLink = document.querySelector('.modal--link');
  const modalItemQuantity = document.querySelector('.cart--quantity');

  const IsModalActive = true;
  const toggleModal = () => {
    cartModalOverlay.classList.toggle('overlay--active');
    cartModal.classList.toggle('modal--active');
  };
  cartBtn.addEventListener('click', () => {
    if (IsModalActive) {
      toggleModal();
    }
  });

  closeModal.addEventListener('click', () => {
    toggleModal();
  });
  // modalItemLink.addEventListener('click', () => {
  //   toggleModal();
  // });
})();
