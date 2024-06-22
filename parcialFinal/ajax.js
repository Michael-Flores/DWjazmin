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