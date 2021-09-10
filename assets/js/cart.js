let cartTotalItems = document.querySelector('#totalquantity');
var cartWrapper = document.querySelector('.cart__quantity');

// Hide cart if quantity is under 0, show if product is added
const hideAndShowCart = (visibility, opacity) => {
  cartWrapper.style.visibility = visibility;
  cartWrapper.style.opacity = opacity;
};

const MAX_CART_QUANTITY = 100;
const Cart = {
  items: [],
  // GETTERS
  get computedItems() {
    return this.items.map((item) => ({
      ...Products.getById(item.id),
      ...item,
    }));
  },

  // Returns cart quantity
  get cartQuantity() {
    // let sum = 0
    // this.items.forEach(item=>sum+=item.quantity)
    // return sum
    // Reduce Function always returns some sort of a value,
    // and holds the state of the value through each iteration,
    // simillar to the code above
    return this.items.reduce((sum, item) => (sum += item.quantity), 0);
  },
  get grandTotal() {
    return this.computedItems.reduce(
      (sum, item) => (sum += Number(item.quantity) * Number(item.price_us)),
      0
    );
  },

  // METHODS
  // Updates entire items object with new given items
  setItems(items) {
    this.items = items;
  },

  // Addes item to cart
  addItem(item) {
    // Returns an index of an item if them given item exists in the items array
    const foundItemIndex = this.getItemIndex(item.id);
    const cartItem = this.items[foundItemIndex];

    // -1 means that is didnt found nothing
    if (foundItemIndex > -1) {
      // Exit the function if reach max
      if (cartItem.quantity >= MAX_CART_QUANTITY) return;
      // If item exist in array, just update quantity
      cartItem.quantity += item.quantity;
    } else {
      this.items.push(item);
    }

    this.updateLS();
  },

  getItemIndex(id) {
    return this.items.findIndex((x) => x.id === id);
  },
  getById(id) {
    return this.items.find((item) => item.id === id);
  },

  decrementQuantity(id) {
    const i = this.getItemIndex(id);
    if (i !== -1) {
      this.items[i].quantity -= 1;
      if (this.items[i].quantity === 0) {
        this.items.splice(i, 1);
      }
    }
    this.updateLS();
  },

  incrementQuantity(id) {
    const i = this.getItemIndex(id);
    if (i !== -1) {
      if (this.items[i].quantity < MAX_CART_QUANTITY) {
        this.items[i].quantity += 1;
      }
    }
    this.updateLS();
  },

  // Saves cart to local storage
  updateLS() {
    document.dispatchEvent(new CustomEvent('cart-update'));
    localStorage.setItem('cart', JSON.stringify(this.items));
    localStorage.setItem('totalquantity', JSON.stringify(this.cartQuantity));
  },
};

const savedQuantity = localStorage.getItem('totalquantity');
if (savedQuantity <= null) {
  hideAndShowCart('hidden', 0);
} else {
  cartTotalItems.innerHTML = savedQuantity;
  hideAndShowCart('visible', 1);
}

// Get total Items quantity from Local Storage and assign it to the cart on load
document.addEventListener('cart-update', () => {
  if (!Cart.items.length) {
    hideAndShowCart('hidden', 0);
  } else {
    cartTotalItems.innerHTML = Cart.cartQuantity;
    hideAndShowCart('visible', 1);
  }

  // Styling and animation - Popup for when clicking on add to cart
  // Snackbar.show({
  //   pos: 'bottom-center',
  //   text: `${Cart.computedItems.name}x ${Products.name} added to cart`,
  //   textColor: 'var(--color-textdark)',
  //   actionTextColor: 'var(--color-cta)',
  //   customClass: 'sb',
  // });

  gsap
    .timeline({ yoyo: true, repeat: 1 })
    .to('#cart', { scaleX: 1.7, scaleY: 1.7, overwrite: 'all', duration: 0.1 });
});
