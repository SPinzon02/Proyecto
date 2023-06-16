const formularioPaciente = document.getElementById("formulario-personas")
const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const cedula = document.getElementById("cedula")
const edad = document.getElementById("edad")
const telefono = document.getElementById("telefono")
const especialidad = document.getElementById("opciones-especialidad")

formularioPaciente.addEventListener("submit", function(event){
    event.preventDefault()

    const paciente ={
        nombre: nombre.value,
        apellido: apellido.value,
        cedula: cedula.value,
        edad: edad.value,
        telefono: telefono.value,
        especialidad: especialidad.value

    }
    let pacientes = []
    let localPacientes = localStorage.getItem("pacientes")
    if (localPacientes){
        pacientes = JSON.parse(localPacientes)
    }
    pacientes.push(paciente)
    localStorage.setItem("pacientes",JSON.stringify(pacientes))
    formularioPaciente.reset()
    alert("Paciente registrado con exito")
})