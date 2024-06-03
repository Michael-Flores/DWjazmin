<?php session_start();
$correo=$_POST['correo'];
$password=sha1($_POST['password']);
include('conexion.php');
$sql="SELECT usuario,nombrecompleto,nivel from usuarios where usuario='$correo' 
and password='$password'";
//echo $sql;

$result = $con->query($sql);
if ($result->num_rows > 0) {
    $datos = $result->fetch_assoc();
    $_SESSION['usuario']=$datos['usuario'];
    $_SESSION['nivel']=$datos['nivel'];
    echo "Usuario autenticado ".$datos["nombrecompleto"]." Nivel ". $datos["nivel"];
    
}
else
{
  echo "Acceso denegado";
  ?>
   
  
<?php
}

?>
