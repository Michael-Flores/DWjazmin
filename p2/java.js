function cargarboton(abrir){
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
    principal.innerHTML="";
    var img=document.createElement('img');
    img.src="images/"+imagen
    principal.appendChild(img);
    var mensaje=document.getElementById('mensaje');
    mensaje.innerHTML=imagen;
    
}