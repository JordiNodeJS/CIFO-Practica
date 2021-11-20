import { $arrow_left, $arrow_right, demos } from './doom.js'
export default function () {
  // SLIDER, que no spider
  $arrow_left.addEventListener('click', () => plusDivs(-1))
  $arrow_right.addEventListener('click', () => plusDivs(1))

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
  // peta al exportarlo
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
    x[slideIndex - 1].classList.add('animatron-fading')
    dots[slideIndex - 1].className += ' w3-white'
  }
}
