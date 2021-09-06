// Hide/Show Navigation bar on mobile/desktop
const menuList = document.getElementById('menuList');
const menuBtn = document.getElementById('menubtn');
const closeNavElement = document.getElementById('closenav');
const xButton = document.querySelector('#menu--close');
const navbarMobile = document.querySelector('.navbar--mobile');

function menuToggle() {
  navbarMobile.classList.toggle('active');
  xButton.classList.toggle('menu--open');
  menuBtn.classList.toggle('hide');
}
// Hide/Show Navigation bar on mobile/desktop

// Close Navbar on mobile when clicking links
function closeNav() {
  navbarMobile.classList.remove('active');
}
// Close Navbar on mobile when clicking links

// Go-to top button
const goToTopBtn = document.getElementById('gototop');
const gotoTopWrapper = document.querySelector('.gototop');

const goToTopBtnStylings = (visibility, opacity, transform) => {
  gotoTopWrapper.style.opacity = opacity;
  gotoTopWrapper.style.visibility = visibility;
  gotoTopWrapper.style.transform = transform;
};
// When the user scrolls down 20px from the top of the document, show the button
const isScrolled = () => {
  const docScrollTop = document.documentElement.scrollTop;
  if (docScrollTop >= 800) {
    goToTopBtnStylings('visible', 1, 'translateY(-15px)');
  } else {
    goToTopBtnStylings('hidden', 0, 'translateY(50px)');
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

// Delay clicks on links

const delayLinks = (URL) => {
  setTimeout(() => {
    window.location = URL;
  }, 400);
};

// Delay clicks on links

// DarkMode Toggle

const themeBtn = document.getElementById('themebtn');
themeBtn.addEventListener('click', () => {
  setTimeout(() => {
    document.body.classList.toggle('bglight');
    let isLight = document.body.classList.contains('bglight');
    localStorage.setItem('lightTheme', isLight);
  }, 100);
});

// Save to Local Storage
const isLightTheme = JSON.parse(localStorage.getItem('lightTheme'));
if (isLightTheme) {
  document.body.classList.add('bglight');
  themeBtn.checked = true;
}

const cartElement = document.querySelector('#cart');
let cartClicked = true;
const checkAndMoveCart = (boolean, width) => {
  cartClicked = boolean;
  cartElement.style.transform = width;
};
cartElement.addEventListener('click', () => {
  if (cartClicked && document.documentElement.clientWidth >= 1250) {
    checkAndMoveCart(false, 'translateX(100px)');
  } else if (cartClicked && document.documentElement.clientWidth <= 1250) {
    checkAndMoveCart(false, 'translateX(50px)');
  } else {
    checkAndMoveCart(true, 'translateX(0px)');
  }
});
