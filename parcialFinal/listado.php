<?php
include("conexion.php");

 $sql = "SELECT id,materia,nombres_apellidos,calificacion FROM alumnos "; 
$result = $con->query($sql);

if ($result->num_rows > 0) {
?>
    <table border='1'>
        <tr>
            <th>Nro</th>
            <th>Nombres y Apellidos</th>
            <th>Calificacion</th>
        </tr>
        <?php
        while ($row = $result->fetch_assoc()) {
          
        ?>
            <tr>
                <td><?php echo $row['id']; ?></td>
                <td><?php echo $row["nombres_apellidos"]; ?></td>
                <td><input id ="<?php echo $row['id']?>" type="number" value="<?php echo $row["calificacion"]; ?>" style="width:50px;" onchange="actualizar(<?php echo $row['id']?>)"></td>
            </tr>
        <?php }?>
    </table>
<?php
} else {
    echo "0 resultados";
}
mysqli_close($con);
?>