<?php
include("conexion.php");
$sql="SELECT id,materia,dia,hora FROM horarios where materia='SIS256'";
$resultado=$con->query($sql);
?>
<table border="1">
    <tr>
        <th>hora</th>
        <th>Lunes</th>
        <th>Martes</th>
        <th>Miercoles</th>
        <th>Jueves</th>
        <th>Viernes</th>
    
    </tr>
    <?php
   for ($i=1;$i<=10;$i++) {
     ?>
     <tr>
       <td><?php echo $i+7 ."-".$i+8; ?></td>
       <td></td>
       <td></td>
       <td></td>
       <td></td>
       <td></td>
    </tr>
     <?php }?>
</table>
