<?php
$nombre = $_GET['p1'];
$codigo = $_GET['p2'];
$carrera = $_GET['p3'];

$server = "";
$user = "";
$db = "";
$password = "";

$conn = mysqli_connect($server,$user,$password,$db);
if(!$conn){
    die ("conexion fallo");
}
$sql="Insert into `persona` (`nombre`,`codigo`,`carrera`) Values ('$nombre','$codigo','$carrera')";
if(mysqli_query($conn,$sql)){
    echo "Agregado con exito";
}else{
    echo "No se Agrego";
}
mysqli_close($conn);
?>
