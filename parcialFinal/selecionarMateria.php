<?php
include("conexion.php");
$sql="SELECT DISTINCT materia FROM horarios";
$resultado=$con->query($sql);
?>
<select name="materia" id="materia" onchange="horarios()">
  <?php
  while ($row=$resultado->fetch_assoc()) {
    ?>
  <option value="<?php echo $row['materia'];?>"><?php echo $row['materia'];?></option>
 <?php }?>
  
</select>