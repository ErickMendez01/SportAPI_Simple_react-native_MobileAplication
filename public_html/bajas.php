<?php
$id = $_GET['p1'];
$server = "";
$user = "";
$db = "";
$password = "";

$conn = mysqli_connect($server,$user,$password,$db);
if(!$conn){
    die ("conexion fallo");
}
$sql="Delete from persona where id=$id";
if(mysqli_query($conn,$sql)){
    
    
    echo "Elimando con exito";
}else{
    echo "No se elimino";
}
mysqli_close($conn);
?>
