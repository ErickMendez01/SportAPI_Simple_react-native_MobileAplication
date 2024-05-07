<?php
$nombre = $_GET['p1'];
$correo = $_GET['p2'];
$pass = $_GET['p3'];
//script de insercion 
$server = "";
$user = "";
$db = "";
$password = "";

$conn = mysqli_connect($server,$user,$password,$db);
if(!$conn){
    die("Conexion fallida");
}
//sentencia de insercion
$sql = "Insert into `usuarios`(`name`,`email`,`pass`) Values ('$nombre','$correo','$pass')";

// ejecutamos la sentencia
if(empty($nombre) || empty($correo) || empty($pass)){
    echo "ERROR, falta algun dato.";
}else{
    mysqli_query($conn,$sql);
    echo "Insertado con exito. Nombre: ".$nombre.". Correo: ".$correo.". Y Password: ".$pass;
}
mysqli_close($conn);
?>