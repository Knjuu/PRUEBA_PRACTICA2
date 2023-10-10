document.getElementById("registroPacienteForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    // Obtener los valores del formulario
    var nombre = document.getElementById("nombre").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var direccion = document.getElementById("direccion").value;
    var departamento = document.getElementById("departamento").value;
    var municipio = document.getElementById("municipio").value;
    var tipoDocumento = document.getElementById("tipoDocumento").value;
    var numeroDocumento = document.getElementById("numeroDocumento").value;
    var telefono = document.getElementById("telefono").value;
    var motivoConsulta = document.getElementById("motivoConsulta").value;
    
    // Crear un objeto paciente
    var paciente = {
        nombre: nombre,
        fechaNacimiento: fechaNacimiento,
        direccion: direccion + ', ' + departamento + ', ' + municipio,
        tipoDocumento: tipoDocumento,
        numeroDocumento: numeroDocumento,
        telefono: telefono,
        motivoConsulta: motivoConsulta
    };
    
    // Convertir el objeto paciente a JSON
    var pacienteJSON = JSON.stringify(paciente);
    
    // Almacenar en localStorage
    localStorage.setItem(numeroDocumento, pacienteJSON);
    
    alert("Paciente registrado correctamente.");
    
    // Limpiar el formulario
    document.getElementById("registroPacienteForm").reset();
});
