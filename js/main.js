// navbar colapsable
import colapsalo from './colapsao.js'
const $btnColasable = document.querySelector('#btnColasable')
$btnColasable.addEventListener('click', colapsalo)

// MODALS
const modalImgs = document.querySelectorAll('.modal-img')
console.log(modalImgs)
for (const modalImg of modalImgs) {
  modalImg.addEventListener('click', e => {
    let idModal = `#modal_${e.target.dataset.modal}`
    console.log(idModal)
    document.querySelector(idModal).style.display = 'block'
  })
}

const w3modals = document.querySelectorAll('.w3-modal')

for (const w3modal of w3modals) {
  w3modal.addEventListener('click', () => (w3modal.style.display = 'none'))
}

//Getting the button, footer, inner_footer y si te descuidas el bocadillo de la tarde.
const mybutton = document.getElementById('myBtn')
const myfooter = document.getElementById('footer')
const $inner_footer = document.getElementById('inner_footer')

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

// SLIDER, que no spider
const $arrow_left = document.querySelector('#arrow_left')
const $arrow_right = document.querySelector('#arrow_right')
const demos = document.querySelectorAll('.demo')

$arrow_left.addEventListener('click', () => plusDivs(-1))
$arrow_right.addEventListener('click', () => plusDivs(1))

for (let i = 0; i < demos.length; i++) {
  const element = demos[i]
  element.addEventListener('click', () => currentDiv(i + 1))
}

// código infumable para poder extraerlo sin romperlo tooooóo
let slideIndex = 1
showDivs(slideIndex)
function plusDivs(n) {
  showDivs((slideIndex += n))
}
function currentDiv(n) {
  showDivs((slideIndex = n))
}
function showDivs(n) {
  let i
  let x = document.getElementsByClassName('mySlides')
  let dots = document.getElementsByClassName('demo')
  if (n > x.length) {
    slideIndex = 1
  }
  if (n < 1) slideIndex = x.length

  for (i = 0; i < x.length; i++) x[i].style.display = 'none'

  for (i = 0; i < dots.length; i++)
    dots[i].className = dots[i].className.replace(' w3-white', '')

  x[slideIndex - 1].style.display = 'block'
  x[slideIndex - 1].classList.add('w3-animate-fading')
  dots[slideIndex - 1].className += ' w3-white'
}

// ;(function () {})()
