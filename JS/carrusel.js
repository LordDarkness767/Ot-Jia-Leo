document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("#flex-container .img-flex");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let index = 0;

    // Función para mostrar solo una imagen
    function mostrarImagen(i) {
        images.forEach(img => img.style.display = "none");
        images[i].style.display = "block";
    }

    // Inicializar carrusel
    mostrarImagen(index);

    // Botón siguiente
    nextBtn.addEventListener("click", () => {
        index++;
        if (index >= images.length) index = 0;
        mostrarImagen(index);
    });

    // Botón anterior
    prevBtn.addEventListener("click", () => {
        index--;
        if (index < 0) index = images.length - 1;
        mostrarImagen(index);
    });

    // (Opcional) autoplay
    setInterval(() => {
        index++;
        if (index >= images.length) index = 0;
        mostrarImagen(index);
    }, 3000);
});