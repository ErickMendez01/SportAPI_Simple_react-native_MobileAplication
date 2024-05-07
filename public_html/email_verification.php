<?php
 $code = $_GET['code'];
 include_once("config.php");
 $sql = "UPDATE userregistration SET status ='1' where activationcode = '$code'";

 if(mysqli_query($conn,$sql)){
     echo "Correo autentificado correctamente";
 }else{
     echo "error";
 }
 mysqli_close($conn);
?>