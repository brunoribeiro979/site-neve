const titulo = document.querySelector('h1');

function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArray.forEach((letra, index) => {
    setTimeout(() => (elemento.innerHTML += letra), 75 * index);
  });
  console.log(textoArray);
}

typeWriter(titulo);
