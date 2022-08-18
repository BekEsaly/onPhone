const navToggle=document.querySelector(".nav-toggle");
const menu=document.querySelector(".menu");
const body=document.querySelector(".body");
navToggle.addEventListener('click',function onClick(event){
    navToggle.classList.toggle("change");
    menu.classList.toggle("active");
    body.classList.toggle("overlay");
});