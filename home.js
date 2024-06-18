// JavaScript

window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  
  if (window.scrollY > 50) {
    header.classList.add('header-scrolled');
  } else {
    header.classList.remove('header-scrolled');
  }
});
