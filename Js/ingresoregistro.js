let registrarPaciente = document.getElementById("registrar-paciente");
let registrarMedico = document.getElementById("registrar-medico");
let listaPaciente = document.getElementById("lista-paciente");
let listaMedico = document.getElementById("lista-medico");


registrarPaciente.addEventListener("click", function (){
    window.location.href = "./registrarpacientes.html"  
}); 
registrarMedico.addEventListener("click", function (){
    window.location.href = "./registrarmedicos.html"  
}); 
listaPaciente.addEventListener("click", function (){
    window.location.href = "./listapaciente.html"  
}); 
listaMedico.addEventListener("click", function (){
    window.location.href = "./listamedicos.html"  
}); 
