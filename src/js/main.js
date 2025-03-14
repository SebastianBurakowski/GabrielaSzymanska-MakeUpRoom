let burgerBtn;
let burgerBars;
let mobileNav;

const prepareDomElements = () => {

    //////// POBIERANIE ELEMENTÓW STRONY //////


   
    burgerBtn = document.querySelector('.burger-btn')
    burgerBars = document.querySelector('.burger-btn__bars')
    mobileNav = document.querySelector('.navbar__mobile')

}

//FUNCTIONS

const burgerHandle = () => {
    
    burgerBtn.classList.toggle('burger-active')
    burgerBars.classList.toggle('black-bars-color')
    mobileNav.classList.toggle('navbarActive');
}




const prepareDomEvents = () => {

    ////////// WYWOŁANIE FUNKCJI ///////////////////
   
    burgerBtn.addEventListener("click", burgerHandle)

}

///// GŁOWNE WYWOŁANIE FUNKCJI /////

const main = () => {
    prepareDomElements()
    prepareDomEvents();

}

window.addEventListener('DOMContentLoaded', main)