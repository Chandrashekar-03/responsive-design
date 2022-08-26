const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

    if(navToggle){
        navToggle.addEventListener('click', ()=>{
            navMenu.classList.add('show-menu')
        })
    }

    if(navClose){
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu')
        })
    }
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// MIXIT  UP PRODUCTS
const swiper = new Swiper(".testimonial__swiper", {  
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// ACTIVE FEATURED LINK
const linkPortfolio = document.querySelectorAll('.filter__item')

function activePortfolio(){
    linkPortfolio.forEach(l=> l.classList.remove('active-portfolio'))
    this.classList.add('active-portfolio')
}
linkPortfolio.forEach(l=> l.addEventListener('click', activePortfolio))

// ACCORDION JS
const accordionHeaders = document.querySelectorAll('.accordion__header');

accordionHeaders.forEach(accordionHeader => {
    accordionHeader.addEventListener('click', event => {
        const currentlyActiveAccordionHeader = document.querySelector('.accordion__header.active');
        if(currentlyActiveAccordionHeader && currentlyActiveAccordionHeader!==accordionHeader) {
            currentlyActiveAccordionHeader.classList.toggle('active');
            currentlyActiveAccordionHeader.nextElementSibling.style.maxHeight = 0;
        }
        accordionHeader.classList.toggle('active');
        const accordionBody = accordionHeader.nextElementSibling;
        if(accordionHeader.classList.contains('active')){
            accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
        }
        else{
            accordionBody.style.maxHeight = 0;
        }
    });
});