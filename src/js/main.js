let aboutSection;


const prepareDomElements = () => {

    //////// POBIERANIE ELEMENTÓW STRONY //////


    aboutSection = document.querySelector('.about')

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