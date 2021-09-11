const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const menu = document.getElementById('mob-nav');
const menuItems = Array.from(document.querySelectorAll('.page-sections'));

function openMobileMenu() {
  menu.style.display = 'block';
}

function closeMobileMenu() {
  menu.style.display = 'none';
}

openMenu.addEventListener('click', openMobileMenu);
closeMenu.addEventListener('click', closeMobileMenu);

menuItems.forEach((item) => {
  item.addEventListener('click', closeMobileMenu);
});