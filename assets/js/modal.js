//  Cart Modal!
const drawCartModal = () => {
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
  ////////////////////////////////////// Toggle Cart Modal!

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

const drawGrandTotal = () => {
  // Total Cost in Cart Modal!
  document.querySelector('.modal__total').innerHTML = `
     <h3>Total Cost</h3>
     <p class='totalcost'>$${Number(Cart.grandTotal.toFixed(2)).toLocaleString()}</p>
     <a class='modal__btn product__cta' href="#checkout">CheckOut</a>
     `;
};

// INITIAL DRAW
drawCartModal();
drawGrandTotal();

const cartModalOverlay = document.querySelector('#overlay--active');
const cartModalContainer = document.querySelector('#modal--active');

const CartModal = {
  isOpen: false,

  close() {
    cartModalOverlay.classList.remove('overlay--active');
    cartModalContainer.classList.remove('modal--active');
    cartModalContainer.style.transition = 'all 500ms ease';

    this.isOpen = false;
  },

  open() {
    cartModalOverlay.classList.add('overlay--active');
    cartModalContainer.classList.add('modal--active');
    this.isOpen = true;
  },

  toggle() {
    if (this.isOpen) {
      CartModal.close();
    } else {
      CartModal.open();
    }
  },
};

const closeElements = document.querySelectorAll(
  '.cart--btn, .modal--close, .modal--link, .modal__btn'
);
closeElements.forEach((el) => el.addEventListener('click', () => CartModal.toggle()));

cartModalOverlay.addEventListener('click', () => {
  CartModal.toggle();
});

// Event dispatched on every cart update
document.addEventListener('cart-update', () => {
  drawCartModal();
  drawGrandTotal();
});
