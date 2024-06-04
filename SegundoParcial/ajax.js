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
        td.style.height="10px";S
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
    contenedor.style.flexWrap = 'wrap';
    var col=document.getElementById('color').value;
    var fondo=document.getElementById('fondo').value;
    var text=document.getElementById('a').value;
  var div=document.createElement('div');
  div.style.width="600px";
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
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        crearparrofo();
    }
  });
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

function pregunta4(){
    var titulo=document.getElementById('titulo');
    titulo.innerHTML="Pregunta 4";
    titulo.style.textAlign="center";
        titulo.style.color="red";
    var bt1=document.getElementById('bt1');
        var bt2=document.getElementById('bt2');
        bt1.style.display="block";
        bt2.style.display="block";
        bt1.style.border="1px solid blue"
        bt2.style.border="1px solid blue"
        bt1.textContent="listar";
        bt2.textContent="insertar";
        var sub=document.getElementById('sub-m');
        sub.innerHTML="";
    }
    function listar(abrir){
        if(document.getElementById('bt1').textContent=='listar' && document.getElementById('bt2').textContent=='insertar'){
            var contenedor;
            contenedor = document.getElementById('contenido');
            var ajax = new XMLHttpRequest() //crea el objetov ajax 
            ajax.open("get", abrir, true);
            ajax.onreadystatechange = function () {
                if (ajax.readyState == 4) {
                    var personas = JSON.parse(ajax.responseText);
                    
                           
                            contenedor.innerHTML='';
                            var ta=document.createElement('table');
                                ta.style.border="1px solid"
                                ta.className="tabla";
                            var tr=document.createElement('tr');
                            var nr=document.createElement('th');
                            var fot=document.createElement('th');
                            var nomb=document.createElement('th');
                            var ape=document.createElement('th');
                            var eda=document.createElement('th');
                            var sex=document.createElement('th');
                            
                            nr.textContent="N°";
                            fot.textContent="Imagen";
                            nomb.textContent="Titulo";
                            ape.textContent="Autor";
                            eda.textContent="Editorial";
                            sex.textContent="Año";
                            
                            tr.appendChild(nr);
                            tr.appendChild(fot);
                            tr.appendChild(nomb);
                            tr.appendChild(ape);
                            tr.appendChild(eda);
                            tr.appendChild(sex);
                          
                            ta.appendChild(tr);
                            
        
                            for (var i = 0; i < personas.length; i++) {
                                
                                var tr2=document.createElement('tr');
                                   tr2.className="par";
                                var nro=document.createElement('td');
                                var foto=document.createElement('td');
                                var img=document.createElement('img')
                                var nombr=document.createElement('td');
                                var apellid=document.createElement('td');
                                var ed=document.createElement('td');
                                var se=document.createElement('td');
                                
                                nro.textContent= i+1;
                                img.src=`images/${personas[i].imagen}`;
                                img.style.width="100px";
                                img.style.height="100px";
                                foto.appendChild(img);
                                foto.style.border="1px solid"
                                nombr.textContent=personas[i].titulo;
                                nombr.style.border="1px solid"
                                apellid.textContent=personas[i].autor;
                                apellid.style.border="1px solid"
                                ed.textContent=personas[i].editorial;
                                ed.style.border="1px solid"
                                se.textContent=personas[i].anio;
                                se.style.border="1px solid"
                                 
                                tr2.appendChild(nro);
                                tr2.appendChild(foto);
                                tr2.appendChild(nombr);
                                tr2.appendChild(apellid);
                                tr2.appendChild(ed);
                                tr2.appendChild(se);
                               
                                ta.appendChild(tr2);
                           
                            
                                    
                                }
                            contenedor.appendChild(ta);
        
                }
            }
            ajax.setRequestHeader("Content-Type", "text/html; charset=utf-8");
            ajax.send();
    }
  }
  