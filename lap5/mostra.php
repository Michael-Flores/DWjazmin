<?php 
include('conexion.php');



?>

<?php
include("conexion.php");
   $id=$_GET['id'];
   
    $sql = "SELECT id, tipo, correo, asuntovarchar, mensaje, estado FROM correos where id=$id";


$result = $con->query($sql);
$i = 0;
if ($result->num_rows > 0) {
    
?>

<?php
        while ($row = $result->fetch_assoc()) {
            $i=$i+1
        ?>
    <table >
        
            <tr>
                
                <td><?php echo $row["mensaje"]; ?></td>
                
            </tr>
        
    </table>
    
    
    <?php } ?>
<?php
} else {
    echo "0 resultados";
}
mysqli_close($con);
?>
