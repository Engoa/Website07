// Hide/Show Navigation bar on mobile/desktop
const menuList = document.getElementById('menuList');
const menuBtn = document.getElementById('menubtn');
const menuListDesktop = document.getElementById('desktop');
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
