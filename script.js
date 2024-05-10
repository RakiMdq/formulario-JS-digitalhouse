//atrapar el submit

const submitFunction = (event) => {
     if(!validarFormulario()){
        event.preventDefault() //prevee la actualizacion de la pagina
     }else{
        event.preventDefault();

        alert(
            'Los datos enviado fueron: \n'+
            'Nombre: '+ document.getElementById('nombre').value + '\n'+
            'Apellido: '+ document.getElementById('apellido').value + '\n'+
            'Documento: '+ document.getElementById('documento').value + '\n'+
            'EMail: '+ document.getElementById('email').value + '\n'+
            'Edad: '+ document.getElementById('edad').value + '\n'+
            'Actividad: '+ document.getElementById('actividad').value + '\n'+
            'Nivel de estudio: '+ document.getElementById('nivelEstudio').value + '\n'
            
        )
     }
    
  
}
document.getElementById('formulario').addEventListener('submit', submitFunction)
//validar el formulario

function validarFormulario() {
    const camposTexto = document.querySelectorAll('input[type="text"]');
    let validacionCorrecta = true;

    camposTexto.forEach(campo => {
        let errorCampo = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1)) //id primera letra mayucula
        if (campo.value.length == '') {
            mostrarError(errorCampo, 'Este campo es requerido!')
            validacionCorrecta = false
        }else if(campo.value.length > 0 && campo.value.length < 3){
            mostrarError(errorCampo, 'Este campo debe tener al menos 3 carácteres!')
            validacionCorrecta = false
        }else{
            ocultarError(errorCampo)
        }
    })
    const email = document.getElementById('email');
    let errorMail = document.getElementById('errorMail')

    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){  //regex que valida el formato del mail, ver con ! adelante
        ocultarError(errorMail)
    }else{
        mostrarError(errorMail, 'Ingrese un correo electrónico válido!')
    }
    const edad = document.getElementById('edad');
    let errorEdad = document.getElementById('errorEdad')
    if(edad.value <18){
        mostrarError(errorEdad, 'Debe ser mayor de 18 años para gegistrarse!')
        validacionCorrecta= false;

    }else{
        ocultarError(errorEdad)
    }
    const actividad = document.getElementById('actividad')
    let errorActividad = document.getElementById('errorActividad')
    if(actividad.value == ''){
        mostrarError(errorActividad, 'Por favor seleccione una actividad!')
        validacionCorrecta = false

    }else{
        ocultarError(errorActividad)
    }
    const nivelEstudio = document.getElementById('nivelEstudio')
    let errorNivelEstudio = document.getElementById('errorNivelEstudio')
    if(nivelEstudio.value == ''){
        mostrarError(errorNivelEstudio, 'Por favor ingrese un nivel de estudio!')
        validacionCorrecta = false;
    }else{
        ocultarError(errorNivelEstudio)
    }
    const aceptoTerminos = document.getElementById('aceptoTerminos')
    let errorAceptoTerminos = document.getElementById('errorAceptoTerminos')
    if(!aceptoTerminos.checked){
        mostrarError(errorAceptoTerminos, 'Debes aceptar los términos y condiciones!')
        validacionCorrecta=false
    }else{
        ocultarError(errorAceptoTerminos)
    }

    return validacionCorrecta;


}
const mostrarError = (elemento, mensaje) =>{
    elemento.textContent = mensaje;
    elemento.style.display = "block";
}
const ocultarError  = (elemento) =>{
    elemento.textContent = '';
    elemento.style.display = "none";
}