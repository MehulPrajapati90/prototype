const menu = document.querySelector('.menu-list');
const navbar = document.querySelector('.navbar');
const menuBtn = document.querySelector('.menu-btn');
const cancelBtn = document.querySelector('.cancel-btn');

menuBtn.onclick = ()=>{
    // console.log("hello")
    menu.classList.add("active");
    menuBtn.classList.add("hide");
}

cancelBtn.onclick = ()=>{
    // console.log("hello")
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
}

window.onscroll = ()=>{
    this.scrollY > 20 ? navbar.classList.add("sticky"): navbar.classList.remove("sticky");
}