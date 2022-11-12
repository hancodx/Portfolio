var hamburger = document.querySelector(".hamb");
var navlist = document.querySelector(".nav-list");
var links = document.querySelector(".nav-list li");

hamburger.addEventListener("click" , function(){
    this.classlist.toggle("click");
    navlist.classList.toggle("open");
})