function pregunta1(){
        var titulo=document.getElementById('titulo');
        var bt1=document.getElementById('bt1');
        var bt2=document.getElementById('bt2');
        bt1.style.display="none";
        bt2.style.display="none";
        titulo.innerHTML="Pregunta 1";
        titulo.style.textAlign="center";
        titulo.style.color="red";
        var sub=document.getElementById('sub-m');
      var ajax = new XMLHttpRequest() 
      ajax.open("get", 'datos.html', true);
      ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
          sub.innerHTML = ajax.responseText;
  
        }
      }
     
      ajax.send();
  }
  function crear() {
    var contenedor = document.getElementById("contenido");
    contenedor.innerHTML="";
    var filas = document.getElementById("a").value;
    var columnas = document.getElementById("b").value;
    var tabla = document.createElement("table");
    
    for (let i = 0; i < filas; i++) {
      var tr = document.createElement("tr");
      
      for (let j = 0; j < columnas; j++) {
        var td = document.createElement("td");
        td.style.border="1px solid";
        td.style.width="150px";
        td.style.height="10px";
        td.contentEditable = true;
        td.addEventListener("keydown", function(event) {
          if (event.key === "Enter") {
            event.preventDefault();
            this.blur();
          }
        });
        tr.appendChild(td);
      }
  
      tabla.appendChild(tr);
    }
  
    contenedor.appendChild(tabla);
  }