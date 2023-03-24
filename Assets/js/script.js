/* ============= MENU SHOW & HIDDEN ============= */
const navMenu = document.getElementById('nav-menu'),
      navOpen = document.getElementById('nav-toggle'),
      navClose = document.querySelector("#nav-menu #nav-close"),
      navOverlay = document.getElementById('nav-overlay')

/* ============= MENU SHOW ============= */
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

/* ============= MENU HIDDEN ============= */
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



/* ============= REMOVE MENU MOBILE ============= */
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



/* =============== ACORDION SKILLS =============== */
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
