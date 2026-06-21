const navToggle=document.querySelector('.nav-toggle');
const nav=document.querySelector('nav.main');
if(navToggle&&nav){navToggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');navToggle.setAttribute('aria-expanded',String(open));});}
