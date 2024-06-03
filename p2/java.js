function cargarboton(abrir){
  var cuer;

  cuer = document.getElementById('c');
  cuer.innerHTML="";
    var contenedor;
    contenedor = document.getElementById('menu');
    var nombre;
    nombre=document.getElementById('mensaje');
    nombre.innerHTML="Nely Laureano Pacheco  35-4582";
    var ajax = new XMLHttpRequest() //crea el objetov ajax 
    ajax.open("get", abrir, true);
    ajax.onreadystatechange = function () {
      if (ajax.readyState == 4) {
        contenedor.innerHTML = ajax.responseText;

      }
    }
   
    ajax.send();
}
function pregunta2(url) {

    var datos = document.getElementById('menu');
    fetch(url)
        .then(response => response.text())
        .then(data => datos.innerHTML = data);


}
function mostrarimagen(imagen)
{
    var principal=document.getElementById('principal');
    var cuer=document.getElementById("cuerpo");
    principal.innerHTML="";
    var img=document.createElement('img');
    img.src="images/"+imagen
    principal.appendChild(img);
    var mensaje=document.getElementById('mensaje');
    mensaje.innerHTML=imagen;
    cuer.style.height="auto";
    
}
function pregunta3(){
  var cuer;

  cuer = document.getElementById('c');
  cuer.innerHTML="";
  var contenedor;

  contenedor = document.getElementById('menu');
  var cont=document.getElementById("principal");
  var nombre;
  nombre=document.getElementById('mensaje');
  
  var ajax = new XMLHttpRequest() //crea el objetov ajax 
  ajax.open("get", 'login.php', true);
  ajax.onreadystatechange = function () {
    if (ajax.readyState == 4) {
      cont.innerHTML = ajax.responseText;
      nombre.innerHTML="";
      contenedor.innerHTML="";

    }
  }
 
  ajax.send();
}
function login(){
  var cuer;

  cuer = document.getElementById('c');
  cuer.innerHTML="";
  var cont=document.getElementById("principal");
  var nombre;
  nombre=document.getElementById('mensaje');
  var formulario = document.getElementById("form-datos");
    var parametros = new FormData(formulario);
  var ajax = new XMLHttpRequest() //crea el objetov ajax 
  ajax.open("post", 'autenticar.php', true);
  ajax.onreadystatechange = function () {
    if (ajax.readyState == 4) {
      cuer.style.width="100%"
        var div=document.createElement('div');
        div.style.width="100%";
        div.style.height="50px";
        div.style.textAlign="center";
        div.style.backgroundColor="red"
        div.innerHTML=ajax.responseText
        cuer.appendChild(div);
        cont.innerHTML="";
        var contenedor;
        contenedor = document.getElementById('menu');
        var ajaxs = new XMLHttpRequest() //crea el objetov ajax 
        ajaxs.open("get", 'botones.html', true);
        ajaxs.onreadystatechange = function () {
          if (ajax.readyState == 4) {
            contenedor.innerHTML = ajaxs.responseText;
    
          }
        }
       
        ajaxs.send();

    }
  }
 
  ajax.send(parametros);
}
function pregunta4(){
  var cuer;

  cuer = document.getElementById('c');
   var cuerpo=document.getElementById
    var contenedor;
    contenedor = document.getElementById('principal');
    var ajax = new XMLHttpRequest() //crea el objetov ajax 
    ajax.open("get", 'listar.php', true);
    ajax.onreadystatechange = function () {
      if (ajax.readyState == 4) {
        contenedor.innerHTML = ajax.responseText;
       
      }
    }
   
    ajax.send();
}