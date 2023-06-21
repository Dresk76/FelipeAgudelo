/* =============================== LOADER =============================== */
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend", () => {
        document.body.removeChild("loader");
    })
})




/* ========================= MENU SHOW & HIDDEN ========================= */
const navMenu = document.getElementById('nav-menu'),
      navOpen = document.getElementById('nav-toggle'),
      navClose = document.querySelector("#nav-menu #nav-close"),
      navOverlay = document.getElementById('nav-overlay')




/* ============================== MENU SHOW ============================== */
/* Validateif constant exists */
if (navOpen)
{
    navOpen.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
        navOpen.classList.add('active')
        navOverlay.classList.add('active')
        navClose.classList.remove('active')
    })
}




/* ============================= MENU HIDDEN ============================= */
/* Validateif constant exists */
if (navClose)
{
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
        navOpen.classList.remove('active')
        navOverlay.classList.remove('active')
        navClose.classList.add('active')
    })
}




/* ========================== REMOVE MENU MOBILE ========================== */
const navLink = document.querySelectorAll('.nav__link')

function linkAction()
{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
    navOpen.classList.remove('active')
    navOverlay.classList.remove('active')
    navClose.classList.add('active')
}
navLink.forEach(n => n.addEventListener('click', linkAction))




/* =========================== ACORDION SKILLS =========================== */
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills()
{
    let itemClass = this.parentNode.className

    for (i = 0; i < skillsContent.length; i++)
    {
        skillsContent[i].className = 'skills__content skills__close'
    }
    if (itemClass === 'skills__content skills__close')
    {
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach ((el) => {
    el.addEventListener('click', toggleSkills)
})




/* ========================== QUALIFICATION TABS ========================== */
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})




/* =========================== SERVICES MODAL =========================== */
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick)
{
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})




/* ========================== PORTFOLIO SWIPER ========================== */
let swiperPortfolio = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,

    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});




/* ============================= TESTIMONIAL ============================= */
let swiperTestimonial = new Swiper(".testimonial__container", {
    spaceBetween: 48,
    loop: true,
    grabCursor: true,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },

    breakpoints: {
        568: {
            slidesPerView: 2,
        },
    },
});




/* =========================== INPUT ANIMATION =========================== */
const inputs = document.querySelectorAll(".contact__input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add('focus');
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == '') {
        parent.classList.remove('focus');
    }
}

inputs.forEach((input) => {
    input.addEventListener('focus', focusFunc);
    input.addEventListener('blur', blurFunc);
})




/* ===================== SCROLL SECTIONS ACTIVE LINK ===================== */
const sections = document.querySelectorAll("section[id]");
const header = document.querySelector("header");

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink.classList.add("active-link");
            if (sectionId === "home") {
                header.classList.remove('scroll-header');
            }
            else
            {
                header.classList.add('scroll-header');
            }
        } else {
            navLink.classList.remove("active-link");
        }
    });
}

window.addEventListener('scroll', scrollActive);




/* =================== VER EL EJE Y ACTUAL POR CONSOLA =================== */
window.addEventListener('scroll', function() {
    // console.log(window.scrollY);
});




/* =========================== SHOW SCROLL UP =========================== */
function scrollUp()
{
    const scrollUp = document.getElementById('scroll-up')

    if (this.scrollY >= 200)
    {
        scrollUp.classList.add('show-scroll');
    }
    else 
    {
        scrollUp.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollUp);




/* =========================== DARK LIGHT THEME =========================== */
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const logoImg = document.querySelector('#logo img')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'


// We validate if the user previously chose a topic
if (selectedTheme)
{
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    // Update logo image source based on the theme
    const logoImg = document.querySelector('#logo img');
    const isDarkTheme = document.body.classList.contains(darkTheme);
    logoImg.src = isDarkTheme ? 'Assets/img/iconoLogoAzul.png' : 'Assets/img/iconoLogoRojo.png';

    // Update logo image source based on the theme
    const homeImg = document.getElementById('home-img');
    homeImg.src = isDarkTheme ? 'Assets/img/homeImgAzul.png' : 'Assets/img/homeImgRojo.png';

    // We save the theme and the current icon that the user chose
    // localStorage.setItem('selected-theme', getCurrentTheme())
    // localStorage.setItem('selected-icon', getCurrentIcon())

    // Cerrar menu al cambiar el theme
    navMenu.classList.remove('show-menu')
    navOpen.classList.remove('active')
    navOverlay.classList.remove('active')
    navClose.classList.add('active')
})




/* ============================ GSAP ANIMATION ============================ */

/* --------------------- Home --------------------- */
gsap.from('.home__img', {opacity: 0, duration: 2, delay:.5, x:60})
gsap.from('.home__data', {opacity: 0, duration: 2, delay:.8, y:25})
gsap.from('.home_greeting, .home__title, .home__subtitle, .home__welcome', {opacity: 0, duration: 2, delay:1, y:25, ease:'expo.out', stagger:.2})
gsap.from('.home__social-icon', {opacity: 0, duration: 2, delay:2, y:25, ease:'expo.out', stagger:.2})

/* --------------------- Nav --------------------- */
gsap.from('.nav__logo-a-img, .nav__toggle-wrapper', {opacity: 0, duration: 2, delay:1.5, y:25, ease:'expo.out', stagger:.2})
// gsap.from('.nav__item, .switch', {opacity: 0, duration: 2, delay:1.8, y:25, ease:'expo.out', stagger:.2})
gsap.from('.nav__item', {opacity: 0, duration: 2, delay:1.8, y:25, ease:'expo.out', stagger:.2})


// Esperar 2.5 segundos
setTimeout(function() {
    // Obtener el botón y agregar la clase "fade-in"
    var scrollButton = document.querySelector('.home__scroll-button');
    scrollButton.classList.add('fade-in');
}, 1000);


// Cuando la página se haya cargado completamente 
// window.addEventListener('load', function() {
//     // Obtener el botón y agregar la clase "fade-in"
//     var scrollButton = document.querySelector('.home__scroll-button');
//     scrollButton.classList.add('fade-in');
// });



/* ============================= TESTIMONIAL ============================= */


/* ------------------ Nav Footer ------------------ */



