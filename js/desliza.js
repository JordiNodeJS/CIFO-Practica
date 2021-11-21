import { $arrow_left, $arrow_right, demos } from './doom.js'
// SLIDER, que no spider
export default function () {
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

  function showDivs(n) {
    let i
    let slider = document.getElementsByClassName('mySlides')
    let dots = document.getElementsByClassName('demo')
    if (n > slider.length) {
      slideIndex = 1
    }
    if (n < 1) slideIndex = slider.length
    // console.log(slider)
    // for (i = 0; i < slider.length; i++) slider[i].style.display = 'none'
    // Array.from(slider).forEach(img => (img.style.display = 'none'))
    for (const img of slider) img.style.display = 'none'
    for (const dot of dots)
      dot.className = dot.className.replace(' w3-white', '')

    slider[slideIndex - 1].style.display = 'block'
    slider[slideIndex - 1].classList.add('animatron-fading')
    dots[slideIndex - 1].className += ' w3-white'
  }
}
