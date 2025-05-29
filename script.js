const bodyElm = document.querySelector('body');
const logoElm = document.querySelector('.logo');
const hamburgerElm = document.querySelector('.hamburger-menu');
const navElm = document.querySelector('.nav');

const toggleNav = (e) => {
  e.stopPropagation();
  navElm.classList.toggle('nav__open');
};

const homeRedirect = (e) => {
  e.stopPropagation();
  window.location.href = 'O_projektu.html';
};

hamburgerElm.addEventListener('click', toggleNav);

bodyElm.addEventListener('click', () => {
  navElm.classList.remove('nav__open');
});

logoElm.addEventListener('click', homeRedirect);
