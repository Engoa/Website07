var menuList = document.getElementById('menuList');
menuList.style.opacity = '1';

function togglemenu() {
   if (menuList.style.opacity == '0') {
      menuList.style.opacity = '1';
   } else {
      menuList.style.opacity = '0';
   }
}
