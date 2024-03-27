console.log('// mob-menu file');

const burger = document.getElementById('burger');
const nav = document.getElementById('nav-list');
const label = document.getElementById('burger-label');
const body = document.querySelector('body');
const items = document.querySelectorAll('.nav__link');

label.addEventListener('click', toggle);
items.forEach(item => item.addEventListener('click', closeNav));

function toggle() {
  if (!burger.checked) {
    nav.classList.add('nav__open');
    body.classList.add('menu-open');
  }
  if (burger.checked) {
    nav.classList.remove('nav__open');
    body.classList.remove('menu-open');
  }
}

function closeNav() {
  nav.classList.remove('nav__open');
  body.classList.remove('menu-open');
  burger.checked = false;
}
