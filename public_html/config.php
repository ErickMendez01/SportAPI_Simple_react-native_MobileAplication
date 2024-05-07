<?php
$server = "";
$user = "";
$bd = "";
$password = "";


$conn = mysqli_connect($server,$user,$password,$bd);
if(!$conn){
    die ("Error de conexion");
}
?>