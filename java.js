// Usuario y contraseña correctos
const usuarioCorrecto = "erick";
const contrasenaCorrecta = "12345";

// Buscar el formulario de inicio de sesión
document.getElementById("formulario").addEventListener("submit", function(event) {

    event.preventDefault();

    // Obtener los datos ingresados
    let usuario = document.getElementById("usuario").value;
    let contrasena = document.getElementById("contrasena").value;

    // Comprobar los datos
    if (usuario === usuarioCorrecto && contrasena === contrasenaCorrecta) {

        // Ocultar el login
        document.getElementById("login").style.display = "none";

        // Mostrar datos personales
        document.getElementById("datosPersonales").style.display = "block";

    } else {

        // Mostrar error
        document.getElementById("mensaje").textContent =
            "Usuario o contraseña incorrectos";

    }

});