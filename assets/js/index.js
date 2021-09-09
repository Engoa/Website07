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

          <div class="modal__quantity">
            <p><span>x</span>${item.quantity}</p>
          </div>
        </div> `),
      ''
    );
  };

  drawModal();

  // Event dispatched on every cart update
  document.addEventListener('cart-update', drawModal);
})();
