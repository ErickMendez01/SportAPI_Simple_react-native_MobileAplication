<?php
include_once("config.php");

$name = $_GET['name'];
$email = $_GET['email'];
$password = md5($_GET['password']);
$status = 0;
$activationcode = md5($email . time());

if ($name == "" || $email == "" || $password == "") {
    echo "No has completado todos los campos requeridos";
} else {
    $sql = "INSERT INTO userregistration (name, email, password, activationcode, status) VALUES ('$name', '$email', '$password', '$activationcode', '$status')";
    $query = mysqli_query($conn, $sql);
   
    if ($query) {
        $to = $email;
        $subject = "Email de verificación Formula 1";
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
        $headers .= 'From: Formula 1 <email>' . "\r\n";
        
        $ms = "<html><body><div style='font-family: Arial, sans-serif; color: #333;'>";
        $ms .= "<div style='padding: 10px;'>";
        $ms .= "<h1 style='font-size: 24px;'>Estimado $name,</h1>";
        $ms .= "<p style='padding-top: 20px;'>Gracias por registrarte.</p>";
        $ms .= "<p style='padding-top: 20px;'>Haz clic en el siguiente enlace para verificar y activar tu cuenta:</p>";
        $ms .= "<p style='padding-top: 10px;'><a href='https://url..../email_verification.php?code=$activationcode' style='background-color: #007bff; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 4px;'>Verificar cuenta</a></p>";
        $ms .= "</div></div></body></html>";
        
        mail($to, $subject, $ms, $headers);
        
        echo "Registro exitoso. Por favor, verifica tu cuenta en el correo electrónico proporcionado.";
    } else {
        echo "Error al insertar datos. Por favor, inténtalo de nuevo.";
    }
}
?>