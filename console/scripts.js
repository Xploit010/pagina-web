window.addEventListener('load', () => {
    alert('La página se ha recargado.');
  });

  const miboton = document.getElementById ('miBoton');
  miboton.addEventListener('click', () => {
    alert('Has hecho clic en el botón.');
  });


const contadorElemento = document.getElementById('contador');

let contador = 1000

function incrementar() {
  contador++;
  contadorElemento.textContent = contador;
}

function decrementar() {
  contador--;
  contadorElemento.textContent = contador;
}

function reiniciar() {
  contador = 0;
  contadorElemento.textContent = contador;
}
