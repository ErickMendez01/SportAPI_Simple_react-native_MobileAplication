<?php
include_once("config.php");

$email = $_GET['email'];
$password = md5($_GET['pass']);
$status = 1;


$sql = "SELECT * FROM userregistration WHERE email = '$email' AND password = '$password' AND status = '$status'";

$resultado = $conn->query($sql);

if($resultado->num_rows > 0){
    echo "1";
}else{
    echo "Datos de contraseña o usuario incorrectos";
}
?>