<?php
include("conexion.php");
$materia=$_POST['materia'];
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
            if($row['materia']==$materia){
        ?>
            <tr>
                <td><?php echo $row['id']; ?></td>
                <td><?php echo $row["nombres_apellidos"]; ?></td>
                <td><input type="number" value="<?php echo $row["calificacion"]; ?>" style="width:50px;"></td>
            </tr>
        <?php } }?>
    </table>
<?php
} else {
    echo "0 resultados";
}
mysqli_close($con);
?>