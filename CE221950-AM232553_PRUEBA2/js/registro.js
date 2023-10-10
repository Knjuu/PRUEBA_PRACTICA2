document.getElementById("registroPacienteForm").addEventListener("submit", function (e) {
    e.preventDefault();
     
    var nombre = document.getElementById("nombre").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var direccion = document.getElementById("direccion").value;
    var departamento = document.getElementById("departamento").value;
    var municipio = document.getElementById("municipio").value;
    var tipoDocumento = document.getElementById("tipoDocumento").value;
    var numeroDocumento = document.getElementById("numeroDocumento").value;
    var telefono = document.getElementById("telefono").value;
    var motivoConsulta = document.getElementById("motivoConsulta").value;
     
    var paciente = {
        nombre: nombre,
        fechaNacimiento: fechaNacimiento,
        direccion: direccion + ', ' + departamento + ', ' + municipio,
        tipoDocumento: tipoDocumento,
        numeroDocumento: numeroDocumento,
        telefono: telefono,
        motivoConsulta: motivoConsulta
    };
     
    var pacienteJSON = JSON.stringify(paciente);
     
    localStorage.setItem(numeroDocumento, pacienteJSON);
    
    alert("Paciente registrado correctamente.");
     
    document.getElementById("registroPacienteForm").reset();
});

document.getElementById("verListado").addEventListener("click", function () {
    window.location.href = "lista.html";
});
