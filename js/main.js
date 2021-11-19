firstContact.addEventListener('submit', validar);
email.addEventListener('keyup', () => pasa_valor('email'));
asunto.addEventListener('keyup', () => pasa_valor('asunto'));
miedad.addEventListener('keyup', () => pasa_valor('miedad'));
miedad.addEventListener('keyup', () => pasa_valor('miedad'));
dni.addEventListener('keyup', () => pasa_valor('dni'));
dni.addEventListener('keyup', () => pasa_valor('dni'));
contenido.addEventListener('keyup', () => pasa_valor('contenido'));
acepto.addEventListener('click', () => pasa_valor('acepto'));
borrar.addEventListener('click', aviso_reset);

function validar() {
  let mymail = mail();
  let myasunto = asunt();
  let mycontent = content();
  let mydni = c_dni();
  let myedad = edad();
  let acepto = v_check();

  if (!mymail || !myasunto || !mycontent || !mydni || !myedad || !acepto) {
    document.querySelector('#error').innerHTML = 'ERRORUM';
    error.style.color = '#FF0000';
    return false;
  }
  document.querySelector('#error').innerHTML = 'Enviando';
  error.style.color = '#068B3E';
  return true;
}

function aviso_reset() {
  let reset = confirm(
    'ATENCIÓN!!!!!!!\nSi confirmas, se borraran todos los datos del formulario'
  );
  reset ? location.reload(true) : false;
}

function mail() {
  let ptremail =
    /^[a-z0-9_-]+([.][a-z0-9_-]+)*@[a-z0-9_]+([.][a-z0-9_]+)*[.][a-z]{2,9}$/;
  let correo = document.firstContact.email.value;
  if (!ptremail.test(correo)) {
    return false;
  }
  return true;
}

function asunt() {
  let ptrasunto = /^[A-Za-zÀ-ÿ-\u00f1\u00d1\s]{5,40}$/;
  let asunto = document.firstContact.asunto.value;
  if (!asunto.match(ptrasunto)) {
    return false;
  }
  return true;
}

function c_dni() {
  let dni = document.firstContact.dni.value;
  dni = dni.toUpperCase();
  let numero, letra, let1;
  let pdni = /^[XYZ]?\d{5,8}[A-Z]{1}$/;
  let resul = pdni.test(dni);

  if (resul) {
    numero = dni.substr(0, dni.length - 1);
    numero = numero.replace('X', 0);
    numero = numero.replace('Y', 1);
    numero = numero.replace('Z', 2);

    let1 = dni.substr(dni.length - 1, 1);
    letra = 'TRWAGMYFPDXBNJZSQVHLCKE';
    numero = numero % 23;
    letra = letra.substring(numero, numero + 1);
    if (letra !== let1) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
}

function edad() {
  let fechaNacimiento = document.firstContact.miedad.value;
  let fechaNace = new Date(fechaNacimiento);
  let fechaActual = new Date();
  console.log(fechaNacimiento);
  console.log(fechaNace);
  console.log(fechaActual);

  let mes = fechaActual.getMonth();
  let dia = fechaActual.getDate();
  let año = fechaActual.getFullYear();

  fechaActual.setDate(dia);
  fechaActual.setMonth(mes);
  fechaActual.setFullYear(año);

  let mi_edad = Math.floor(
    (fechaActual - fechaNace) / (1000 * 60 * 60 * 24) / 365
  );
  if (mi_edad >= 18) {
    return true;
  } else {
    return false;
  }
}

function content() {
  let ptrcontent = /[A-Za-zÀ-ÿ-\u00f1\u00d1\s]{10,250}$/;
  let content = document.firstContact.contenido.value;
  if (!content.match(ptrcontent)) {
    return false;
  }
  return true;
}
function v_check() {
  let acepto = document.firstContact.acepto.checked;
  if (!acepto) {
    return false;
  }
  return true;
}

function pasa_valor(name) {
  /*   let valor = document.firstContact[name].value; */
  let result;

  switch (name) {
    case 'email':
      result = mail();
      if (result) {
        document.getElementById('mostra1').innerHTML = '. Email correcto';
        mostra1.style.color = '#068B3E';
        email.style.border = 'solid 1px green';
      } else {
        document.getElementById('mostra1').innerHTML =
          '. Email no válido. se esperaba una (@) y un (.)';
        mostra1.style.color = '#FF0000';
        email.style.border = 'solid 1px red';
      }
      break;

    case 'asunto':
      result = asunt();
      if (result) {
        document.getElementById('mostra2').innerHTML =
          '. Asunto dentro de parámetros';
        mostra2.style.color = '#068B3E';
        asunto.style.border = 'solid 1px green';
      } else {
        document.getElementById('mostra2').innerHTML =
          '. Asunto no válido. SE SIENTEEEEE';
        mostra2.style.color = '#FF0000';
        asunto.style.border = 'solid 1px red';
      }
      break;

    case 'contenido':
      result = content();
      if (result) {
        document.getElementById('mostra3').innerHTML = '. Contenido válido';
        mostra3.style.color = '#068B3E';
        contenido.style.border = 'solid 1px green';
      } else {
        document.getElementById('mostra3').innerHTML =
          '. Asunto no válido. SE SIENTEEEEE';
        mostra3.style.color = '#FF0000';
        contenido.style.border = 'solid 1px red';
      }
      break;

    case 'miedad':
      result = edad();
      if (result) {
        document.getElementById('mostra4').innerHTML = 'Tienes más de 18 años';
        mostra4.style.color = '#068B3E';
        miedad.style.border = 'solid 1px green';
      } else {
        document.getElementById('mostra4').innerHTML =
          'No puedes registrarte porque tienes menos de 18 años';
        mostra4.style.color = '#FF0000';
        miedad.style.border = 'solid 1px red';
      }
      break;

    case 'dni':
      result = c_dni();
      if (result) {
        document.getElementById('mostra5').innerHTML = 'DNI válido';
        mostra5.style.color = '#068B3E';
        dni.style.border = 'solid 1px green';
      } else {
        document.getElementById('mostra5').innerHTML = 'DNI o NIE no válido';
        mostra5.style.color = '#FF0000';
        dni.style.border = 'solid 1px red';
      }
      break;
    case 'acepto':
      result = v_check();
      if (result) {
        document.getElementById('mostra6').innerHTML = ' Correcto';
        mostra6.style.color = '#068B3E';
        acepto.style.border = 'solid 1px green';
      } else {
        document.getElementById('mostra6').innerHTML = 'Incorrecto. No válido';
        mostra6.style.color = '#FF0000';
        acepto.style.border = 'solid 1px red';
      }
      break;
  }
}

const $btnColasable = document.querySelector('#btnColasable');

$btnColasable.addEventListener('click', colapsalo);

function colapsalo() {
  let x = document.getElementById('menudesplagable');
  if (x.className.indexOf('w3-show') == -1) {
    x.className += ' w3-show';
  } else {
    x.className = x.className.replace(' w3-show', '');
  }
}
// SLIDER
let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function currentDiv(n) {
  showDivs((slideIndex = n));
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName('mySlides');
  let dots = document.getElementsByClassName('demo');
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' w3-white', '');
  }
  x[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' w3-white';
}

// MODALS
const modalImgs = document.querySelectorAll('.modal-img');
console.log(modalImgs);
for (const modalImg of modalImgs) {
  modalImg.addEventListener('click', e => {
    // console.log(e.target.dataset)
    // console.log(e.target.dataset.modal)
    let idModal = `#modal_${e.target.dataset.modal}`;
    console.log(idModal);
    document.querySelector(idModal).style.display = 'block';
  });
}

const w3modals = document.querySelectorAll('.w3-modal');

for (const w3modal of w3modals) {
  w3modal.addEventListener('click', () => (w3modal.style.display = 'none'));
}
