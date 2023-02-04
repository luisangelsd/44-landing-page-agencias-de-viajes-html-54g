<?php 
// Guardamos los datos que resivimos por el metodo POST y las guardamos en variables
$nombre = $_POST['form_nombre'];
$correo =  $_POST['form_correo'];
$telefono=  $_POST['form_telefono'];
$mensaje =  $_POST['form_mensaje'];


$mensaje_completo="Datos Recolectados\n "
."\n Nombre: ".$nombre
."\n Correo: ".$correo
."\n Teléfono: ".$telefono
."\n Mensaje: ".$mensaje;


 //-- Preparamos los headers
 $para="pruebas@sandovalguicho.com";                            // Añade el correo en el cual recibiras la información, puede ser cualquiera
 $subject="¡Felicidades, tienes un nuevo mensaje!";          // Añade un mensaje como encabezado                                   
 $headers="From: pruebas@sandovalguicho.com\r\n";             // Coloca un correo que lleve la extención de tu dominio, si no tienes un creo inventa uno, pero tiene que tener la extención de tu dominio


//-- Enviamos y validamos si existe algun error
    if( mail($para, $subject, $mensaje_completo, $headers) ){
            header("Location: https://demo.sandovalguicho.com/html/pagina-agradecimiento-ejemplo.html");          //-- Coloca la url de destino en caso de que el formulario se envie con exito
        }else{
            header("Location: https://demo.sandovalguicho.com/html/pagina-de-error-ejemplo.html");                 //-- Coloca la url de destino en caso de que el formulario no pueda ser enviado
    }

?>








