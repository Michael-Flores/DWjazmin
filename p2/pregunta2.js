document.getElementById('crear').addEventListener('click', crearParrafo);

function crearParrafo() {
  const texto = document.getElementById('texto').value;
  const fondo = document.getElementById('fondo').value;
  const color = document.getElementById('color').value;

  const contenido = document.getElementById('contenido');
  const parrafo = document.createElement('p');
  parrafo.textContent = texto;
  parrafo.style.backgroundColor = fondo;
  parrafo.style.color = color;

  contenido.appendChild(parrafo);
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    crearParrafo();
  }
});