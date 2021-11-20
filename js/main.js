import colapsalo, { closeColapsable } from './colapsao.js'
import desliza from './desliza.js'
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
desliza()
