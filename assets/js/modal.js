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
