import colapsalo, { closeColapsable } from './colapsao.js'
import Swiper from './swiper-bundle.esm.browser.min.js'
import scrolea, { parriba } from './scrollToTop.js'
import {
  $btnColasable,
  modalImgs,
  mybutton,
  w3modals,
  sections,
} from './doom.js'

// NAVBAR que colapsa cuando se ajusta al tamaño mobile.
$btnColasable.addEventListener('click', colapsalo)
sections.forEach(section => section.addEventListener('click', closeColapsable))

// SLIDER con swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  effect: 'cube',
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
})

// MODALS a to'as images
for (const modalImg of modalImgs) {
  modalImg.addEventListener('click', e => {
    let idModal = `#modal_${e.target.dataset.modal}`
    document.querySelector(idModal).style.display = 'block'
  })
}
// cerrando MODAL·GLSx
for (const w3modal of w3modals) {
  w3modal.addEventListener('click', () => (w3modal.style.display = 'none'))
}

// SCROLL TO THE TOP OF THE TOP TOP.
//Pa'rriba que te lleva
mybutton.addEventListener('click', parriba)

// si el user va pa'bajo 300pigsel·les desde'l  top de la güep, le enseñas el botoncito ese tan chulo
window.onscroll = () => scrolea()

// SLIDER
