console.log('// mob-menu file');

const burger = document.getElementById('burger');
const nav = document.getElementById('nav-list');
const label = document.getElementById('burger-label');

label.addEventListener('click', toggle);

function toggle() {
  if (!burger.checked) {
    nav.classList.add('nav__open');
  }
  if (burger.checked) {
    nav.classList.remove('nav__open');
  }
}
