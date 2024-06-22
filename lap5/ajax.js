function llamar(){
     var cuerpo=document.getElementById("cuerpo");

      var ajax = new XMLHttpRequest() //crea el objetov ajax 
      ajax.open("get", 'bandeja.php', true);
      ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
  
          cuerpo.innerHTML = ajax.responseText;  
         
        }
      } 
      ajax.send();
  }
  function mostrar(id){
    var cuerpo=document.getElementById(id);

     var ajax = new XMLHttpRequest() //crea el objetov ajax 
     ajax.open("get", 'mostra.php?id=' + id, true);
     ajax.onreadystatechange = function () {
       if (ajax.readyState == 4) {
 
         cuerpo.innerHTML = ajax.responseText;  
        
       }
     } 
     ajax.send();
 }