const Cart = {
  items: [],

  // Updates entire items object with new given items
  setItems(items) {
    this.items = items;
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

  // Addes item to cart
  addItem(item) {
    // Returns an index of an item if them given item exists in the items array
    const foundItemIndex = this.items.findIndex((i) => i.id === item.id);

    // -1 means that is didnt found nothing
    if (foundItemIndex > -1) {
      // If item exist in array, just update quantity
      this.items[foundItemIndex].quantity += item.quantity;
    } else {
      this.items.push(item);
    }

    Snackbar.show({
      pos: 'bottom-center',
      text: `${item.name} added to cart`,
      textColor: 'var(--color-bg)',
      backgroundColor: 'var(--color-text)',
      actionTextColor: 'var(--color-cta)',
      customClass: 'sb',
    });
    console.log(this.items);
    gsap
      .timeline({ yoyo: true, repeat: 1 })
      .to('#cart', { x: 200, overwrite: 'all' });

    this.updateLS();
  },

  // Saves cart to local storage
  updateLS() {
    localStorage.setItem('cart', JSON.stringify(this.items));
  },
};
