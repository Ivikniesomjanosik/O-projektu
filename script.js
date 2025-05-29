const bodyElm = document.querySelector('body');
const hamburgerElm = document.querySelector('.hamburger-menu');
const navElm = document.querySelector('.nav');

const toggleNav = (e) => {
  e.stopPropagation();
  navElm.classList.toggle('nav__open');
};

hamburgerElm.addEventListener('click', toggleNav);

bodyElm.addEventListener('click', () => {
  navElm.classList.remove('nav__open');
});
