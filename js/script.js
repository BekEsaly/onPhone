const navToggle=document.querySelector(".nav-toggle");
const menu=document.querySelector(".menu");
const introBg=document.querySelector(".intro");
navToggle.addEventListener('click',function onClick(event){
    navToggle.classList.toggle("change");
    menu.classList.toggle("active");
   introBg.classList.toggle("overlay");
});