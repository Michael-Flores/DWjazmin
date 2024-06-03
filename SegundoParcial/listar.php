
<?php
include("conexion.php");

    
    $sql = "SELECT l.id,imagen,titulo,autor,anio,editorial FROM libros l
    LEFT JOIN editoriales e on l.ideditorial=e.id";


$result = $con->query($sql);

if ($result->num_rows > 0) {
?>
    <table border='1'>
        <tr>
            
            <th>Imagen</th>
            <th>Titulo</th>
            <th>Autor</th>
            <th>Editorial</th>
            <th>Año</th>
        </tr>
        <?php
        while ($row = $result->fetch_assoc()) {
        ?>
            <tr>
                
                <td><img src="images/<?php echo $row["imagen"]; ?>" width="50" height="50"></td>
                <td><?php echo $row["titulo"]; ?></td>
                <td><?php echo $row["autor"]; ?></td>
                <td><?php echo $row["editorial"]; ?></td>
                <td><?php echo $row["anio"]; ?></td>
            </tr>
        <?php } ?>
    </table>
<?php
} else {
    echo "0 resultados";
}
mysqli_close($con);
?>
<?php 

