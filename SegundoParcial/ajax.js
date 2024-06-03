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


  function preguntas2(abrir,n){
    var contenedor = document.getElementById("contenido");
    contenedor.innerHTML="";
    var titulo=document.getElementById('titulo');
    var bt1=document.getElementById('bt1');
    var bt2=document.getElementById('bt2');
    bt1.style.display="none";
    bt2.style.display="none";
    titulo.innerHTML="Pregunta "+n;
    titulo.style.textAlign="center";
    titulo.style.color="red";
    var sub=document.getElementById('sub-m');
  var ajax = new XMLHttpRequest() 
  ajax.open("get", abrir, true);
  ajax.onreadystatechange = function () {
    if (ajax.readyState == 4) {
      sub.innerHTML = ajax.responseText;

    }
  }
 
  ajax.send();
}

function crearparrofo(){
    var contenedor = document.getElementById("contenido");
    
    var col=document.getElementById('color').value;
    var fondo=document.getElementById('fondo').value;
    var text=document.getElementById('a').value;
  var div=document.createElement('div');
  div.style.width="300px";
  div.style.height="30px";
  div.style.backgroundColor=fondo;
  div.style.textAlign="center";
  var p=document.createElement('p');
  p.innerHTML=text;
  p.style.color=col;
  div.appendChild(p);
  var br=document.createElement('br');
  contenedor.appendChild(div)
  contenedor.appendChild(br)
  
}

function pregunta3(abrir,n){
    var titulo=document.getElementById('titulo');
    var bt1=document.getElementById('bt1');
    var bt2=document.getElementById('bt2');
    bt1.style.display="none";
    bt2.style.display="none";
    titulo.innerHTML="Pregunta "+n;
    titulo.style.textAlign="center";
    titulo.style.color="red";
    var sub=document.getElementById('sub-m');
  var ajax = new XMLHttpRequest() 
  ajax.open("get", abrir, true);
  ajax.onreadystatechange = function () {
    if (ajax.readyState == 4) {
      sub.innerHTML = ajax.responseText;

    }
  }
 
  ajax.send();
}
function mostrarimagen(imagen,titulo,autor,anio,editorial)
{
    var principal=document.getElementById('contenido');
    principal.innerHTML="";
    var img=document.createElement('img');
    img.src="images/"+imagen
    principal.appendChild(img);
    var div=document.createElement('div');
    div.className="info";
     var p1=document.createElement('p');
     p1.innerHTML="titulo:"+titulo;
     div.appendChild(p1);
     var p2=document.createElement('p');
     p2.innerHTML="Autor:"+autor;
     div.appendChild(p2);
     var p3=document.createElement('p');
     p3.innerHTML="Año:"+anio;
     div.appendChild(p3);
     var p4=document.createElement('p');
     p4.innerHTML="Editorial:"+editorial;
     div.appendChild(p4);

     principal.appendChild(div);
    
   
    
}

  