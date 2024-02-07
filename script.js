const btnMenu = document.querySelector('.menu-btn');
const megaMenu = document.querySelector('.mega-menu');


btnMenu.addEventListener('click', function () {
  console.log('alaaaa');
  megaMenu.classList.toggle('appear-menu');
})