<?php
// Conexión a la base de datos
$conexion = mysqli_connect("localhost", "root", "", "bd_academica");

// Función para generar la tabla de horarios
function generarTablaHorarios($materia = null) {
    global $conexion;
    
    $dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
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
                $query = "SELECT * FROM horarios WHERE materia = '$materia' AND dia = '$dia' AND hora = '$hora'";
                $resultado = mysqli_query($conexion, $query);
                if (mysqli_num_rows($resultado) > 0) {
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

?>