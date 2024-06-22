function pregunta1(){
     var contador=document.getElementById("contador");
     var pie=document.getElementById("pie");
     var aumento="";
     contador.style.width="220px";
     contador.style.height="100%";
     contador.style.backgroundColor="yellow"
    aumento+=`<select name="menus" id="menus" onchange="CambiarFondo">
    <option value="titulo"> Titulo</option>
    <option value="menu">Menu</option>
    <option value="sub-menu">Sub-menu</option>
    <option value="contenido">Contenido</option>
    <option value="pie">Pie</option>
    <option value="contador">Contador</option>
</select>
 <input type="color" id="color">`;
 pie+=aumento;

}