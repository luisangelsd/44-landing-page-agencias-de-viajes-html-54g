 <?php   

  // Guardamos los datos que resivimos por el metodo POST y las guardamos en variables
  $nombre =filter_input(INPUT_POST, 'nombre');
  $correo =filter_input(INPUT_POST,'correo');
  $telefono=filter_input(INPUT_POST,'telefono');
  $mensaje =filter_input(INPUT_POST,'mensaje');


  $mensaje_completo="Datos Recolectados:\n"
  ."\n Nombre: ".$nombre
  ."\n Correo: ".$correo
  ."\n Teléfono: ".$telefono
  ."\n Mensaje:".$mensaje;

  $para="sandovalguichoo@gmail.com";               //Añade el correo en el cual recibiras la información
  $subject="¡Felicidades, tienes un nuevo mensaje!";    // Añade un mensaje como encabezado
  mail($para, $subject, $mensaje_completo);             // Aquí se envia el formulario 

  









