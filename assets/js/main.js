// Hide/Show Navigation bar on mobile/desktop
const menuList = document.getElementById('menuList');
const closeNavElement = document.getElementById('closenav');

function menuToggle() {
  menuList.classList.toggle('mobilebtn');
}
// Hide/Show Navigation bar on mobile/desktop

// Close Navbar on mobile when clicking links
function closeNav() {
  menuList.classList.remove('mobilebtn');
}
// Close Navbar on mobile when clicking links

const goToTopBtn = document.getElementById('gototop');
const gotoTopWrapper = document.querySelector('.gototop');
// When the user scrolls down 20px from the top of the document, show the button
const isScrolled = () => {
  const docScrollTop = document.documentElement.scrollTop;
  console.log(docScrollTop);
  if (docScrollTop >= 400) {
    goToTopBtn.style.display = 'flex';
    gotoTopWrapper.style.opacity = 1;
    gotoTopWrapper.style.visibility = 'visible';
  } else {
    gotoTopWrapper.style.opacity = 0;
    gotoTopWrapper.style.visibility = 'hidden';
  }
};

window.onscroll = () => {
  isScrolled();
};

// When the user clicks on the button, scroll to the top of the document
goToTopBtn.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
