const ctnPopup = document.querySelector(".ctn-popup");
const navMobile = document.querySelector(".nav-mobile");
ctnPopup.style.display = "none";
navMobile.style.display = "none";

const mentionButton = document.querySelector("#mention");
mentionButton.addEventListener("click", () => ctnPopup.style.display = "flex");

const validerButton = document.querySelector("#valider");
validerButton.addEventListener("click", () => ctnPopup.style.display = "none");

const menuButton = document.querySelector("#btn-menu");
let menuIsOpen = false;
menuButton.addEventListener("click", () => {
    const path = "./assets/icons"
    menuIsOpen = !menuIsOpen;

    menuButton.src = menuIsOpen ? `${path}/croix.svg` : `${path}/menu.svg`;
    navMobile.style.display = menuIsOpen ? "flex" : "none";
});

