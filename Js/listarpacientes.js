const listaPacientes = document.getElementById("lista-pacientes");
const cuerpoTabla = listaPacientes.querySelector("tbody")
const cookiePaciente = JSON.parse(getCookie("patients"));

console.log(cookiePaciente) 

for (let i = 0; i < cookiePaciente.length; i++) {
    const paciente = cookiePaciente[i];
    let fila = cuerpoTabla.insertRow();

    let cellapellidoPaciente = fila.insertCell();
    cellapellidoPaciente.textContent = paciente.apellidoPaciente;

    let cellnombrePaciente = fila.insertCell();
    cellnombrePaciente.textContent = paciente.nombrePaciente;

    let cellcedulaPaciente = fila.insertCell();
    cellcedulaPaciente.textContent = paciente.cedulaPaciente;

    let celledadPaciente = fila.insertCell();
    celledadPaciente.textContent = paciente.edadPaciente;

    let celltelefonoPaciente = fila.insertCell();
    celltelefonoPaciente.textContent = paciente.telefonoPaciente;

    let cellespecialidadPaciente = fila.insertCell();
    cellespecialidadPaciente.textContent = paciente.especialidadPaciente;

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