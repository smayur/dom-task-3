var regexForText=/^[a-zA-Z]+$/;
var regexForEmail=/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var menu = document.querySelector('.navbar');
var burger = document.querySelector('.burger');
var form = document.querySelector('form');
var firstName = document.querySelector('.name');
var email = document.querySelector('.email');
var message = document.querySelector('.message');
var submit = document.querySelector('.submit');

burger.addEventListener('click', function(){ 
  //Toggle navbar
  burger.classList.toggle('navtoggle');
  menu.classList.toggle('hide-menu');
});

submit.addEventListener('click', function(e){
  e.preventDefault();
  checkfields();
});


function checkfields() {
  if (firstName.value == null || firstName.value == '') { //check first name is not empty
    alert("Please Enter Your Name"); 
  }else if (!firstName.value.match(regexForText)) { //check letters in first name
    alert("Please Use Letters In Name.");
  }else if (email.value == null || email.value == '') { //check email input is not empty
    alert("Please Enter Your Email Address");
  }else if (!email.value.match(regexForEmail)) { //check email input with regular expression
    alert("Please match the format requested.");
  }else if (message.value == null || message.value == '') {
    alert("please enter your Message");
  }else { 
    alert("Thank you!");
    clearForm();
  }
}

function clearForm() {
  form.reset(); //reset the form
}
