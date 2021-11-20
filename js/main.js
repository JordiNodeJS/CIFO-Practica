// navbar colapsable
import colapsalo from './colapsao.js'
import spider from './spider.js'
import {
  $btnColasable,
  modalImgs,
  mybutton,
  myfooter,
  $inner_footer,
  w3modals,
} from './doom.js'

$btnColasable.addEventListener('click', colapsalo)

// MODALS
console.log(modalImgs)
for (const modalImg of modalImgs) {
  modalImg.addEventListener('click', e => {
    let idModal = `#modal_${e.target.dataset.modal}`
    console.log(idModal)
    document.querySelector(idModal).style.display = 'block'
  })
}

for (const w3modal of w3modals) {
  w3modal.addEventListener('click', () => (w3modal.style.display = 'none'))
}

//Getting the button, footer, inner_footer y si te descuidas el bocadillo de la tarde.

mybutton.addEventListener('click', topFunction)

// si el user va pa'bajo 300pigsel·les desde'l  top de la güep, le enseñas el botoncito ese tan chulo
window.onscroll = function () {
  scrollFunction()
}

function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    mybutton.style.display = 'block'
    myfooter.style.display = 'block'
    $inner_footer.classList.add('w3-animate-bottom')
  } else {
    mybutton.style.display = 'none'
    myfooter.style.display = 'none'
    $inner_footer.classList.remove('w3-animate-bottom')
  }
}

// cuando el usuario clicke en el botón ese tan majo que lo lleve pa'rriba
function topFunction() {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}

spider()
