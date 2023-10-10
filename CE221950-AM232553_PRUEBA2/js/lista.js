function mostrarPacientes() {
    var listaPacientes = document.getElementById('listaPacientes');
    listaPacientes.innerHTML = '';
 
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var pacienteJSON = localStorage.getItem(key);
 
        try {
            var paciente = JSON.parse(pacienteJSON);
 
            // Verificar si el objeto tiene las propiedades requeridas
            if (paciente.nombre && paciente.fechaNacimiento && paciente.direccion && paciente.tipoDocumento && paciente.numeroDocumento && paciente.telefono && paciente.motivoConsulta) {
                listaPacientes.innerHTML += `
                    <li>
                        <strong>Nombre:</strong> ${paciente.nombre}<br>
                        <strong>Fecha de Nacimiento:</strong> ${paciente.fechaNacimiento}<br>
                        <strong>Dirección:</strong> ${paciente.direccion}<br>
                        <strong>Tipo de Documento:</strong> ${paciente.tipoDocumento}<br>
                        <strong>Número de Documento:</strong> ${paciente.numeroDocumento}<br>
                        <strong>Número de Teléfono:</strong> ${paciente.telefono}<br>
                        <strong>Motivo de Consulta:</strong> ${paciente.motivoConsulta}<br>
                        <button onclick="eliminarPaciente('${paciente.numeroDocumento}')">Eliminar</button>
                    </li>
                `;
            } else {
                console.error(`El paciente con clave ${key} no tiene todas las propiedades requeridas.`);
            }
        } catch (error) {
            console.error(`Error al parsear el paciente con clave ${key}: ${error.message}`);
        }
    }
}


// Función para eliminar un paciente de localStorage
function eliminarPaciente(numeroDocumento) {
    if (confirm("¿Seguro que deseas eliminar a este paciente?")) {
        // Eliminar el paciente de localStorage
        localStorage.removeItem(numeroDocumento);

        // Actualizar la lista de pacientes en la página
        mostrarPacientes();
    }
}

// Cargar la lista de pacientes al cargar la página
mostrarPacientes();

document.getElementById("regresar").addEventListener("click", function () {
    window.location.href = "registro.html";
});
