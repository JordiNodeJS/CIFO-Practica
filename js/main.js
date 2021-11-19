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
