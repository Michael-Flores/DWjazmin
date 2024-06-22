function pregunta1(){
     var contador=document.getElementById("contador"); // en la primera pagina aumente un div vacio  que tiene el id contador y despues cuando haces clic en el primer pregunta  miestra el contado
     var pie=document.getElementById("pie");
     var aumento="";
     contador.style.width="220px";// aqui al contador le estoy dando un tamaño ensi cambiando sus estilos
     contador.style.height="100%";
     contador.innerHTML="0";
     contador.style.textAlign="center"
     contador.style.backgroundColor="yellow"
    aumento=`<select name="menus" id="menus" onchange="CambiarFondo()"> 
    <option value="titulo"> Titulo</option>
    <option value="menu">Menu</option>
    <option value="sub-menu">Sub-menu</option>
    <option value="contenido">Contenido</option>
    <option value="pie">Pie</option>
    <option value="contador">Contador</option>
</select>
 <input type="color" id="color">`;  // aqui e creado un select con las opcines de los ide de toda la pagina y en el select hay un change y hai dentro estoy llamando a la funcion canbiafondo el change hace que cuando seleciones un elemento en la lista que tiene esl select automaticamente cambia el fondo del id que selecionaste con el color que esta hai 
 pie.innerHTML+=aumento;// aqui lo e añadido al pie de pagina todo lo que cree en aumento

}
function CambiarFondo(){
    var color=document.getElementById("color").value;
    var menus=document.getElementById("menus").value;
    var cambiar=document.getElementById(`${menus}`);
    cambiar.style.backgroundColor=`${color}`
}

function pregunta3(){
    var submenu=document.getElementById('sub-menu');
  var ajax = new XMLHttpRequest() 
  ajax.open("get", 'selecionarMateria.php', true);
  ajax.onreadystatechange = function () {
    if (ajax.readyState == 4) {
      submenu.innerHTML = ajax.responseText;

    }
  }
 
  ajax.send();
}
function CambiarFondo(){
    var color=document.getElementById("color").value;
    var menus=document.getElementById("menus").value;
    var cambiar=document.getElementById(`${menus}`);
    cambiar.style.backgroundColor=`${color}`
}

function horarios(){
    var contenido=document.getElementById('contenido');
    var materia=document.getElementById('materia').value;
  var ajax = new XMLHttpRequest() 
  ajax.open("get", 'horario.php?materia='+materia, true);
  ajax.onreadystatechange = function () {
    if (ajax.readyState == 4) {
      contenido.innerHTML = ajax.responseText;

    }
  }
 
  ajax.send();
}

function pregunta4(){
    var contenido = document.getElementById("contenido");
    var ajax = new XMLHttpRequest();
    ajax.open("GET", "listado.php", true);
    ajax.onreadystatechange = function(){
        if(ajax.readyState == 4){
            contenido.innerHTML = ajax.responseText;
        }
    }
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send();
}
function actualizar(id){
    var contenido = document.getElementById("contenido");
    var d=document.getElementById(`${id}`).value;
    var ajax = new XMLHttpRequest();
    ajax.open("GET", "actualizar.php?id="+ id +"&cal="+d, true);
    ajax.onreadystatechange = function(){
        if(ajax.readyState == 4){
            contenido.innerHTML = ajax.responseText;
        }
    }
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send();
}
