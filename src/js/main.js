let burgerBtn;
let burgerBars;
let mobileNav;
let headerSection;
let navDesktop;
let aboutSection;
let aboutSectionText;
let aboutSectionImg;
let heroImageFirst;
let heroImageSecond;
let heroSection;
let offerSection
let offerElements;
let shopSection;
let ShopImages;

const prepareDomElements = () => {

    //////// POBIERANIE ELEMENTÓW STRONY //////



    burgerBtn = document.querySelector('.burger-btn')
    burgerBars = document.querySelector('.burger-btn__bars')
    mobileNav = document.querySelector('.navbar__mobile')
    headerSection = document.querySelector('.header')
    navDesktop = document.querySelector('.navbar__desktop')
    aboutSection = document.querySelector('.about')
    aboutSectionImg = document.querySelector('.about__photo')
    aboutSectionText = document.querySelector('.about__text')
    heroImageFirst = document.querySelector('.hero__background--first')
    heroImageSecond = document.querySelector('.hero__background--second')
    heroSection = document.querySelector('.hero')
    offerSection = document.querySelector('.offers')
    offerElements = document.querySelectorAll('.offers__container--main')
    shopSection = document.querySelector('.shop')
    ShopImages = document.querySelectorAll('.shop__photo')

}

//FUNCTIONS
const windowHeight = window.innerHeight;


const burgerHandle = () => {

    burgerBtn.classList.toggle('burger-active')
    burgerBars.classList.toggle('black-bars-color')
    mobileNav.classList.toggle('navbarActive');
}

const navHandle = () => {

    const headerSectioTop = headerSection.getBoundingClientRect().top

    if (headerSectioTop <= windowHeight * 0.6) {
        navDesktop.style.position = "sticky";
        navDesktop.style.top = "0"
        navDesktop.style.zIndex = "10000"
    }

}


const handleShowAbout = () => {

    const aboutSectionTop = aboutSection.getBoundingClientRect().top;


    if (aboutSectionTop <= windowHeight * 0.5) {
        aboutSectionImg.classList.add('activeAnimation')
        aboutSectionText.classList.add('activeSecondAnimation')
    } else {
        aboutSectionImg.classList.remove('activeAnimation')
        aboutSectionText.classList.remove('activeSecondAnimation')
    }


}

const heroHandle = () => {

    const heroSectionTop = heroSection.getBoundingClientRect().top
    if (heroSectionTop <= windowHeight * 0.5) {
        heroImageFirst.classList.add('heroAvtive')
        heroImageSecond.classList.add('heroDelay')
    } else {
        heroImageFirst.classList.remove('heroAvtive')
        heroImageSecond.classList.remove('heroDelay')
    }

}

const handleShowOffer = () => {

    const offerSectionTop = offerSection.getBoundingClientRect().top
    if (offerSectionTop <= windowHeight * 0.6) {
        offerElements.forEach((element, index) => {
            element.style.animationDelay = `${index}s`;
            element.classList.add('activeOffer');

        });

    } else {
        // Jeśli sekcja nie jest widoczna, usuwamy animację z elementów
        offerElements.forEach(element => {
            element.classList.remove('activeOffer'); // Usuwamy klasę, aby zatrzymać animację
        });
    }
};

const handleShowShop = () => {
    const shopSectionTop = shopSection.getBoundingClientRect().top

    if (shopSectionTop <= windowHeight * 0.6) {
        ShopImages.forEach((element, index) => {
            element.style.animationDelay = `${index}s`
            element.classList.add('activeShop')
        })
    } else {
        ShopImages.forEach(element => {

            element.classList.remove('activeShop');

        });

    }

}



const prepareDomEvents = () => {

    ////////// WYWOŁANIE FUNKCJI ///////////////////

    burgerBtn.addEventListener("click", burgerHandle)
    window.addEventListener("scroll", navHandle)
    window.addEventListener("scroll", handleShowAbout)
    window.addEventListener('scroll', heroHandle)
    window.addEventListener('scroll', handleShowOffer);
    window.addEventListener('scroll', handleShowShop);

}

///// GŁOWNE WYWOŁANIE FUNKCJI /////

const main = () => {
    prepareDomElements()
    prepareDomEvents();

}

window.addEventListener('DOMContentLoaded', main)