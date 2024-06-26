<?php
include("conexion.php");
function generarTablaHorarios($materia = null) {
   
    
    $dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes']; // vectores
    $horas = ['8-9', '9-10', '10-11', '11-12', '12-13', '13-14', '14-15', '15-16', '16-17', '17-18'];
    
    $tabla = "<table border='1'><tr><th>Hora</th>";
    foreach ($dias as $dia) {
        $tabla .= "<th>$dia</th>";
    }
    $tabla .= "</tr>";
    
    foreach ($horas as $hora) {
        $tabla .= "<tr><td>$hora</td>";
        foreach ($dias as $dia) {
            $celda = "";
            if ($materia) {
                include("conexion.php");
                $sql = "SELECT * FROM horarios WHERE materia = '$materia' AND dia = '$dia' AND hora = '$hora'";
                $resultado =$con->query($sql);
                if ($resultado->num_rows> 0) {
                    $celda = " style='background-color: yellow;'";
                }
            }
            $tabla .= "<td$celda></td>";
        }
        $tabla .= "</tr>";
    }
    $tabla .= "</table>";
    return $tabla;
}



// Mostrar la tabla de horarios
if (isset($_GET['materia'])) {
    $materia_seleccionada = $_GET['materia'];
    echo generarTablaHorarios($materia_seleccionada);
} else {
    echo generarTablaHorarios();
}
?>
