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
let swiper = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,

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
/* ===================== SCROLL SECTIONS ACTIVE LINK ===================== */




/* ===================== SCROLL SECTIONS ACTIVE LINK ===================== */
