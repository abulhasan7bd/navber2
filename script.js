const mubailMenu = document.querySelector("#mobile-menu");
const menuLinds = document.querySelector(".nav-menu");
console.log(mubailMenu);
mubailMenu.addEventListener("click",function(){
    mubailMenu.classList.toggle("is-active");
    menuLinds.classList.toggle("active");
   
})
mubailMenu.addEventListener("dublClck", function(){
    alert("kdsl")
})
