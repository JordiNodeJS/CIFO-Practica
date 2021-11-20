// navbar colapsable
const $btnColasable = document.querySelector('#btnColasable')

$btnColasable.addEventListener('click', colapsalo)

function colapsalo() {
  let x = document.getElementById('menudesplagable')
  if (x.className.indexOf('w3-show') == -1) {
    x.className += ' w3-show'
  } else {
    x.className = x.className.replace(' w3-show', '')
  }
}

// SLIDER
const $arrow_left = document.querySelector('#arrow_left')
const $arrow_right = document.querySelector('#arrow_right')
$arrow_left.addEventListener('click', () => plusDivs(-1))
$arrow_right.addEventListener('click', () => plusDivs(1))

const demos = document.querySelectorAll('.demo')

for (let i = 0; i < demos.length; i++) {
  const element = demos[i]
  element.addEventListener('click', () => currentDiv(i + 1))
}

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
  if (n < 1) {
    slideIndex = x.length
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none'
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' w3-white', '')
  }
  x[slideIndex - 1].style.display = 'block'
  dots[slideIndex - 1].className += ' w3-white'
}

;(function () {})()

// MODALS
const modalImgs = document.querySelectorAll('.modal-img')
console.log(modalImgs)
for (const modalImg of modalImgs) {
  modalImg.addEventListener('click', e => {
    // console.log(e.target.dataset)
    // console.log(e.target.dataset.modal)
    let idModal = `#modal_${e.target.dataset.modal}`
    console.log(idModal)
    document.querySelector(idModal).style.display = 'block'
  })
}

const w3modals = document.querySelectorAll('.w3-modal')

for (const w3modal of w3modals) {
  w3modal.addEventListener('click', () => (w3modal.style.display = 'none'))
}

//Get the button
const mybutton = document.getElementById('myBtn')
const myfooter = document.getElementById('footer')
const $inner_footer = document.getElementById('inner_footer')

mybutton.addEventListener('click', topFunction)

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block'
    myfooter.style.display = 'block'
    $inner_footer.classList.add('w3-animate-bottom')
  } else {
    mybutton.style.display = 'none'
    myfooter.style.display = 'none'
    $inner_footer.classList.remove('w3-animate-bottom')
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}
