const menuHanburguer = document.querySelector("#container__barra");
const navList = document.querySelector("#navbar__list");
const crossMenu = document.querySelector("#navBar__cross");

menuHanburguer.addEventListener("click", ()=> {
    navList.style.display = "flex";
})

crossMenu.addEventListener("click", ()=> {
    navList.style.display = "none";
})
