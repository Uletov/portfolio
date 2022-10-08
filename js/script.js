// burger-menu

let burger = document.querySelector('.burger-open');
let burgerClose = document.querySelector('.nav-close');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click', function () {
  menu.classList.add('active');
  document.body.classList.toggle('stop-scroll');
});

burgerClose.addEventListener('click', function () {
  menu.classList.remove('active');
  document.body.classList.remove('stop-scroll');
})

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    menu.classList.remove('active');
    document.body.classList.remove('stop-scroll');
  });
});
