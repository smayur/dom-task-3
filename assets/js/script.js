var menu = document.querySelector('.navbar');
var burger = document.querySelector('.burger');

burger.addEventListener('click', function(){ 
  //Toggle navbar
  burger.classList.toggle('navtoggle');
  menu.classList.toggle('hide-menu');
});
