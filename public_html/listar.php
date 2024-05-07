<?php

$server = "";
$user = "";
$db = "";
$password = "";

$conn = mysqli_connect($server,$user,$password,$db);
if(!$conn){
    die ("conexion fallo");
}
$sql ="Select * from persona";
$result = mysqli_query($conn,$sql);
if(mysqli_num_rows($result) > 0){
    while($row = mysqli_fetch_assoc($result)){
        echo "id:  ". $row["id"]. "  Nombre:  ". $row["nombre"]. "Codigo:  ". $row["codigo"]. "Carrera:  ". $row["carrera"]. "</br>";
    }
}else{
    
    echo "no existen registros";
}
mysqli_close($conn);
?>

