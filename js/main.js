const menuToggle = document.querySelector('#menu-icon');
const mobileNavContainer = document.querySelector('#mobile__nav');
const mobileBody = document.querySelector('body');

menuToggle.onclick = function(){    
    menuToggle.classList.toggle('menu-icon-active');
    mobileNavContainer.classList.toggle('mobile-nav--active');
    mobileBody.classList.toggle('look');
}