const listaMedicos = document.getElementById("lista-medicos");
const cuerpoTabla = listaMedicos.querySelector("tbody");
const cookieMedico = JSON.parse(getCookie("medicos"))

console.log(cookieMedico);

for (let i = 0; i < cookieMedico.length; i++) {
    const medico = cookieMedico[i];
    let fila = cuerpoTabla.insertRow();

    let cellnombreMedico = fila.insertCell();
    cellnombreMedico.textContent = medico.nombreMedico;

    let cellapellidoMedico = fila.insertCell();
    cellapellidoMedico.textContent = medico.apellidoMedico;

    let cellcedulaMedico = fila.insertCell();
    cellcedulaMedico.textContent = medico.cedulaMedico;

    let cellconsultorioMedico = fila.insertCell();
    cellconsultorioMedico.textContent = medico.consultorio;

    let cellcorreoMedico = fila.insertCell();
    cellcorreoMedico.textContent = medico.correoMedico;

    let cellespecialidadMedico = fila.insertCell();
    cellespecialidadMedico.textContent = medico.especialidadMedico;
}





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
