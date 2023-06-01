let formularioPacientes = document.getElementById("formulario-pacientes")
formularioPacientes.addEventListener('submit', (event) => {
    event.preventDefault();
    const datosPacientes = {
        nombrePaciente: document.getElementById("nombre-paciente").value,
        apellidoPaciente: document.getElementById("apellido-paciente").value,
        cedulaPaciente: document.getElementById("cedula-paciente").value,
        edadPaciente: document.getElementById("edad-paciente").value,
        telefonoPaciente: document.getElementById("telefono-paciente").value,
        especialidadPaciente: document.getElementById("especialidad-paciente").value,
    }
console.log(datosPacientes)
    const patientCookie = getCookie("patients")
        ? JSON.parse(getCookie("patients"))
        : [];



    //?Validar si existe una propiedad con la misma especialidad
    const idExist = patientCookie.some(
        (pat) => pat.cedulaPaciente === datosPacientes.cedulaPaciente
    );
    if (idExist) {
        alert(`Ya existe un usuario con la cedula ${datosPacientes.cedulaPaciente}`);
    } else {
        saveOnCookie(datosPacientes); //?si no, guarda la cookie
    }
    const confirmation = confirm(
        "¿Desea ver la lista de registros o seguir añadiendo pacientes?"
    );
    if (confirmation) {
        window.location.href = "registrarpacientes.html";
    } else {
        formularioPacientes.reset();
    }

})



function saveOnCookie(datosPacientes) {
    //recibe el objeto creado del formulario
    let patientData = getCookie("patients"); //trae la cookie
    if (patientData === "") {
        //si no hay cookie crea un array
        patientData = "[]";
    }
    const patients = JSON.parse(patientData); //elimina las comillas de un json

    patients.push(datosPacientes);
    const newJSON = JSON.stringify(patients);
    setCookie("patients", newJSON);
}
//! Función para guardar datos en la cookie
function setCookie(name, value) {
    document.cookie = `${name}=${encodeURIComponent(value)}`;
}


//!Funcion para traer la cookie
function getCookie(nameCookie) {
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split("=");
        if (cookie[0] === nameCookie) {
            return decodeURIComponent(cookie[1]);
        }
    }
    return "";
}
