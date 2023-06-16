const formularioDoctor = document.getElementById("formulario-doctores")
const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const cedula = document.getElementById("cedula")
const especialidad = document.getElementById("opciones-especialidad")
const consultorio = document.getElementById("consultorio")
const email = document.getElementById("email")


formularioDoctor.addEventListener("submit", function(event){
    event.preventDefault()
    const doctor ={
        nombre: nombre.value,
        apellido: apellido.value,
        cedula: cedula.value,
        especialidad: especialidad.value,
        consultorio: consultorio.value,
        email: email.value
    }
    let doctores = []
    let localDoctores = localStorage.getItem("doctores")
    if (localDoctores){
        doctores = JSON.parse(localDoctores)
    }
    doctores.push(doctor)
    localStorage.setItem("doctores",JSON.stringify(doctores))
    formularioDoctor.reset()
    alert("Medico registrado con exito")
})


