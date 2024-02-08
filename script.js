const btnMenu = document.querySelector('.menu-btn');
const megaMenu = document.querySelector('.mega-menu');


btnMenu.addEventListener('click', function () {
  megaMenu.classList.toggle('appear-menu');
})