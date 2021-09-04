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

// Go-to top button

const goToTopVisibility = (visibility, opacity, transform) => {
  gotoTopWrapper.style.opacity = opacity;
  gotoTopWrapper.style.visibility = visibility;
  gotoTopWrapper.style.transform = transform;
};
const goToTopBtn = document.getElementById('gototop');
const gotoTopWrapper = document.querySelector('.gototop');
// When the user scrolls down 20px from the top of the document, show the button
const isScrolled = () => {
  const docScrollTop = document.documentElement.scrollTop;
  if (docScrollTop >= 400) {
    goToTopVisibility('visible', 1, 'translateY(-25px)');
  } else {
    goToTopVisibility('hidden', 0, 'translateY(50px)');
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
