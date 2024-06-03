 // Función para crear la tabla
 function crearTabla() {
    const filas = document.getElementById("filas").value;
    const columnas = document.getElementById("columnas").value;
    const tabla = document.createElement("table");
  
    for (let i = 0; i < filas; i++) {
      const fila = document.createElement("tr");
  
      for (let j = 0; j < columnas; j++) {
        const celda = document.createElement("td");
        celda.contentEditable = true;
        celda.addEventListener("keydown", function(event) {
          if (event.key === "Enter") {
            event.preventDefault();
            this.blur();
          }
        });
        fila.appendChild(celda);
      }
  
      tabla.appendChild(fila);
    }
  
    const contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = "";
    contenedor.appendChild(tabla);
  }
  
  // Función para manejar el evento de presionar el botón "Crear"
  document.getElementById("crear").addEventListener("click", crearTabla);