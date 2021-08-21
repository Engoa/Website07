

// Hide/Show Navigation bar on mobile/desktop
const menuList = document.getElementById('menuList');
const menuBtn = document.getElementById('menubtn');

function menuToggle() {
   menuList.classList.toggle('mobile');
}
// Hide/Show Navigation bar on mobile/desktop

// Close Navbar on mobile when clicking links
function closeNav() {
   menuList.classList.remove('mobile');
}
// Close Navbar on mobile when clicking links
