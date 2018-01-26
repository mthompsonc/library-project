var divs = document.querySelectorAll('div');
console.log(divs);

for (var i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', prop);
}

function prop(event) {
  alert('hola soy el div ' + this.className + '\n el click se originó en el div ' + event.target.className);
  event.stopPropagation();
}

//los eventos reciben tres parametros, el evento, la función y true o false.
//false está por default y quiere decir que está en fase bubbling
//true significa que está en fase captura