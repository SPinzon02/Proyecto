let formularioMedicos = document.getElementById("formulario-medicos")
formularioMedicos.addEventListener('submit', (event) =>{
    event.preventDefault();
    const datosMedicos ={
        nombreMedico: document.getElementById("nombre-medico").value,
        apellidoMedico: document.getElementById("apellido-medico").value,
        cedulaMedico: document.getElementById("cedula-medico").value,
        consultorio: document.getElementById("consultorio").value,
        correoMedico: document.getElementById("correo-medico").value,
        especialidadMedico: document.getElementById("especialidad").value,
    }
console.log(datosMedicos)
const medicoCookie = getCookie("medicos")? JSON.parse(getCookie("medicos")):[];

const idExist = medicoCookie.some(
    (pat) => pat.cedulaMedico === datosMedicos.cedulaMedico
);
if (idExist) {
    alert(`Ya existe un medico con la cedula ${datosMedicos.cedulaMedico}`);
} else {
    saveOnCookie(datosMedicos); //?si no, guarda la cookie
}
const confirmation = confirm(
    "¿Desea ver la lista de registros o seguir añadiendo médicos?"
);
if (confirmation) {
    window.location.href = "./listamedicos.html";
} else {
    formularioMedicos.reset();
}


})

function saveOnCookie(datosMedicos) {
    //recibe el objeto creado del formulario
    let medicoDatos = getCookie("medicos"); //trae la cookie
    if (medicoDatos === "") {
        //si no hay cookie crea un array
        medicoDatos = "[]";
    }
    const medicos = JSON.parse(medicoDatos); //elimina las comillas de un json

    medicos.push(datosMedicos);
    const newJSON = JSON.stringify(medicos);
    setCookie("medicos", newJSON);
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



