(() => {
  const drawModal = () => {
    document.querySelector('.modal__items').innerHTML = Cart.computedItems.reduce(
      (cartItemsList, item) =>
        (cartItemsList += `
        <div class="modal__item">

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
            <p>${item.name}</p>
          </div>

          <div class="item--counts">
          <div class="add--modal"><button id='add--modal'type="button">
          <i class="fas fa-plus"></i>
          </button></div>
          <div class="modal__quantity">
            <p><span>x</span>${item.quantity}</p>
          </div>
        <div class="remove--modal"><button id='remove--modal' type="button">
          <i class="fas fa-minus"></i>
        </button></div>
      </div>
        </div> `),
      ''
    );
  };

  drawModal();

  // Event dispatched on every cart update
  document.addEventListener('cart-update', drawModal);

  const cartModalOverlay = document.querySelector('#overlay--active');
  const cartModal = document.querySelector('#modal--active');
  const cartBtn = document.querySelector('#cart');
  const closeModal = document.querySelector('#modal--close');

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

  $(`#add--modal`).click(() => {
    alert('Still working on it 😒');
  });
  $(`#remove--modal`).click(() => {
    alert('Still working on it 😒');
  });
})();
