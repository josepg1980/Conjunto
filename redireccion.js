function redireccionarSegunRol() {
    var rol = document.getElementById("rol").value;

    if (rol === "administrador") {
        window.location.href = "Administrador.html";
    } else if (rol === "Propietario") {
        window.location.href = "Propietario.html";
    } else if (rol === "Seguridad") {
        window.location.href = "Seguridad.html";
    } else if (rol === "Piscina") {
        window.location.href = "Piscina.html";
    } else {
        alert("Rol inválido");
    }
}