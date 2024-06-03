<?php session_start();
if (!isset($_SESSION['usuario'])) {
?>
    
<?php
    die('Acceso Denegado');
}
?>