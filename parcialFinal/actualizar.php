<?php

$cal = $_GET['cal'];
$id = $_GET['id'];

include('conexion.php');

    $sql = "UPDATE alumnos SET  calificacion=$cal
    WHERE id=$id";

if ($con->query($sql) === TRUE) {
    echo "Se actualizo el registro correctamente";
} else {
    echo "Error: " . $sql . "<br>" . $con->error;
}

$con->close();
?>
