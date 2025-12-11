// Autor: Daniela Gutierrez
// Versión: 1.0

// Cuando el usuario hace clic en la imagen, se "engrandirá"
document.addEventListener("DOMContentLoaded", () => {
    const img = document.getElementById("img-galeria");

    if (img) {
        img.addEventListener("click", () => {
            img.style.transform = "scale(1.3)";
            img.style.transition = "transform 0.3s ease";
            console.log("Imagen ampliada al hacer clic");
        });
    }
});
