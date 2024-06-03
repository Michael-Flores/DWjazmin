<?php
include("conexion.php");
$sql = "SELECT l.id,imagen,titulo,autor,anio,editorial FROM libros l
LEFT JOIN editoriales e on l.ideditorial=e.id";
$result = $con->query($sql);

if ($result->num_rows > 0) {
?>
    <table >
        <?php
        while ($row = $result->fetch_assoc()) {
        ?>
            <tr>
                <td><a href="javascript:mostrarimagen('<?php echo $row["imagen"];  ?>','<?php echo $row["titulo"];  ?> ','<?php echo $row["autor"];  ?> ','<?php echo $row["anio"];  ?> ','<?php echo $row["editorial"];  ?> ')"> <img src="images/<?php echo $row["imagen"];  ?>" alt="<?php echo $row["titulo"];  ?>" width="50" height="50"></a></td>
            </tr>
        <?php } ?>
    </table>
<?php
} else {
    echo "0 resultados";
}
mysqli_close($con);
?>
-