document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("cambiarColor");
    boton.addEventListener("click", function() {
        document.body.style.backgroundColor = obtenerColorAleatorio();
    });
});

function obtenerColorAleatorio() {
    const colores = ["#f0f8ff", "#ffebcd", "#faebd7", "#dcdcdc", "#e6e6fa"];
    return colores[Math.floor(Math.random() * colores.length)];
}
