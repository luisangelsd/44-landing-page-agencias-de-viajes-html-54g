// Este metodo valida si el formulario no esta vació
 function validarFormulario(){
    let nombre=document.getElementById('form-nombre').value;
    let telefono=document.getElementById('form-telefono').value;
    let correo=document.getElementById('form-email').value;
    let mensaje=document.getElementById('form-mensaje').value;
    let respuesta=false;


    
    if(nombre!=""){
        if(correo !=""){
          if(telefono!=""){
            if (mensaje!="") {
                 respuesta=true;    
              }
          }
        }
   
    }
  

    return respuesta;
}

//Este metodo valida, prepara y envia la peticion al archivo "modelo.php" quien ejecutara el servicio.
function enviarFormulario(){

     // Obtenemos los datos de la vista y los guardamos en una variable llamada "datos"
     let nombre=document.getElementById('form-nombre').value;
     let telefono=document.getElementById('form-telefono').value;
     let correo=document.getElementById('form-email').value;
     let mensaje=document.getElementById('form-mensaje').value;

    let datos=
    "nombre="+nombre+
    "&telefono="+telefono +
    "&correo="+correo + 
    "&mensaje="+mensaje;

    if (validarFormulario()) {

   
        try {
             
            $.ajax({
                url:"modelo.php", //Este es el servicio que envia la información a un correo electrónico
                data:datos,             // Estos son los datos recolectados del formulario
                method:"POST",          // Este es el metodo http por el cual se enviara la petición

                beforeSend: function(){
                    // Esto se ejecuta siempre al iniciar la peticion 
                    document.getElementById("form-mensaje-respuesta").textContent="Enviando...";
                },
                success: function(){
                    //Esto se ejecuta cuando la peticion se ejecuta correctamente 
                    let d1=document.getElementById("form-btn");
                    d1.insertAdjacentHTML('afterend', '<meta http-equiv="refresh" content="0; url= https://demo.sandovalguicho.com/html/pagina-agradecimiento-ejemplo.html" />');
                    document.getElementById("form-mensaje-respuesta").textContent="¡Mensaje Enviado!";
                },
                
                error:function(){
                    //Esto se ejecuta cuando la peticion contiene algun error
                    //- Puedes agregar más codigo si gustas
                    document.getElementById("form-mensaje-respuesta").textContent("No se pudo enviar el mensaje");
                },

                complete: function(){
                    //Esto se ejecuta cuando la peticion se ejecuta, independiente si tiene errores o no
                    //Puedes agregar codigo si gustas  - por defecto no tiene nada
                }
            });
        } catch (error) {
            document.getElementById("form-mensaje-respuesta").textContent="Ups!! Ocurrio un error al enviar. Intentalo más tarde.";
        }

        
    } else {
        document.getElementById("form-mensaje-respuesta").textContent="*Rellena todos los campos";        
    }
}
