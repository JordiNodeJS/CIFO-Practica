import { mybutton, myfooter, $inner_footer } from './doom.js'
export function scrollFunction() {
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
export function topFunction() {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}
