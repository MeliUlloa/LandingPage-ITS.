// Función para abrir y cerrar el menú
function toggleNav() {
    // Selecciona el menú de navegación
    var nav = document.getElementById("nav");
    // Selecciona el icono del menú (barras o equis)
    var iconMenu = document.getElementById("icono-menu");

    // Añade o elimina la clase 'open' al menú para mostrarlo u ocultarlo
    nav.classList.toggle("open");

    // Alternar el icono del menú entre 'fa-bars' y 'fa-times'
    if (iconMenu.classList.contains("fa-bars")) {
        // Si el icono es 'fa-bars', lo cambia a 'fa-times'
        iconMenu.classList.remove("fa-bars");
        iconMenu.classList.add("fa-times");
    } else {
        // Si el icono es 'fa-times', lo cambia a 'fa-bars'
        iconMenu.classList.remove("fa-times");
        iconMenu.classList.add("fa-bars");
    }
}

// Estilos para el botón de carga (si aplica)
window.onload = function() {
    // Busca el botón con la clase 'boton'
    var button = document.querySelector(".boton");

    // Espera la duración de la animación (1 segundo) para remover la clase
    setTimeout(function() {
        button.classList.remove("spinner-active");
    }, 1000); // Espera 1 segundo
};
