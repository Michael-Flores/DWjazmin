<?php
include("conexion.php");

    
    $sql = "SELECT l.id,imagen,titulo,autor,anio,editorial FROM libros l
    LEFT JOIN editoriales e on l.ideditorial=e.id";
$result = $con->query($sql);
$datos = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $datos[] = $row;
    }
}
echo json_encode($datos, JSON_UNESCAPED_UNICODE);
?>