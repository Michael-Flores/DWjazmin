<?php 
include('conexion.php');
?>
<a href="cerrar.php">Cerrar Session</a>
<form action="read.php" method="get">
    <label for="filtro">Buscar</label>
    <input type="text" name="filtro" >
    <input type="submit" value="Buscar">
</form>
<?php
include("conexion.php");
if (isset($_GET['ordenar']))
{
    $ordenar=$_GET['ordenar'];
}
else
{
    $ordenar="id";
}
if (isset($_GET['filtro']))
{
    $filtro=$_GET['filtro'];
    $sql = "SELECT l.id,imagen,titulo,autor,anio,editorial,carrera FROM libros l
    LEFT JOIN editoriales e on l.ideditorial=e.id  left join carreras c on l.idcarrera=c.id where nombres like '%$filtro%' or apellidos like '%$filtro%' order by $ordenar asc";
}
else
{
    $sql = "SELECT l.id,imagen,titulo,autor,anio,editorial,carrera FROM libros l
    LEFT JOIN editoriales e on l.ideditorial=e.id  left join carreras c on l.idcarrera=c.id order by $ordenar asc";
}
$result = $con->query($sql);
$i = 1;
if ($result->num_rows > 0) {
?>
    <table border='1'>
        <tr>
            <th>Nro</th>
            <th>Fotografia</th>
            <th><a href="read.php?ordenar=nombres">Titulo</a></th>
            <th><a href="read.php?ordenar=apellidos">Autor</a></th>
            <th><a href="read.php?ordenar=edad">Año</a></th>
            <th><a href="read.php?ordenar=sexo">Editorial</a></th>
            <th><a href="read.php?ordenar=sexo">Carrera</a></th>
            
            <th>Operaciones</th>
        </tr>
        <?php
        while ($row = $result->fetch_assoc()) {
        ?>
            <tr>
                <td><?php echo $i++; ?></td>
                <td><img src="images/<?php echo $row["imagen"]; ?>" width="50" height="50"></td>
                <td><?php echo $row["titulo"]; ?></td>
                <td><?php echo $row["autor"]; ?></td>
                <td><?php echo $row["anio"]; ?></td>
                <td><?php echo $row["editorial"]; ?></td>
                <td><?php echo $row["carrera"]; ?></td>
                
                <td><?php if($_SESSION['nivel']==1){
                    ?>
                <a href="form_editar.php?id=<?php echo $row["id"] ?>"><img src="images/editar.png"></a>
                    <a href="eliminar.php?id=<?php echo $row["id"] ?>"><img src="images/eliminar.png"></a>
                <?php } ?> </td>
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
if($_SESSION['nivel']==1){
    ?>
    <a href="form_insertar.php">Insertar</a>
    <?php
}
