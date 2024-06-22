<?php 
include('conexion.php');



?>

<?php
include("conexion.php");

   
    $sql = "SELECT id, tipo, correo, asuntovarchar, mensaje, estado FROM correos";


$result = $con->query($sql);
$i = 0;
if ($result->num_rows > 0) {
    
?>

<?php
        while ($row = $result->fetch_assoc()) {
            $i=$i+1
        ?>
    <a href="javascript:mostrar(<?php echo $i ?>)"><table >
        
            <tr>
                
                <td><?php echo $row["correo"]; ?></td>
                <td><?php echo $row["asuntovarchar"]; ?></td>
            </tr>
        
    </table></a>
      <div id="<?php echo $i ?>"> </div>
    
    <?php } ?>
<?php
} else {
    echo "0 resultados";
}
mysqli_close($con);
?>
