let headerText;
let headerSpan


const prepareDomElements = () => {

    //////// POBIERANIE ELEMENTÓW STRONY //////


    headerText = document.querySelector('.header__title')
    headerSpan = document.querySelector('.header__span')

}

//FUNCTIONS



const prepareDomEvents = () => {

    ////////// WYWOŁANIE FUNKCJI ///////////////////
    window.addEventListener("scroll", handleScroll);

}

///// GŁOWNE WYWOŁANIE FUNKCJI /////

const main = () => {
    prepareDomElements()
    prepareDomEvents();

}

window.addEventListener('DOMContentLoaded', main)