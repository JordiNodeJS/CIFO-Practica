export default function colapsalo() {
  let x = document.getElementById('menudesplagable')
  if (x.className.indexOf('w3-show') == -1) x.className += ' w3-show'
  else x.className = x.className.replace(' w3-show', '')
}

export function closeColapsable() {
  let x = document.getElementById('menudesplagable')
  if (x.className.indexOf('w3-show') == -1) true
  else x.className = x.className.replace(' w3-show', '')
}
