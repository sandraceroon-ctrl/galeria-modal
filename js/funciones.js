const modal = document.querySelector(".modal");
const enlaces = document.querySelectorAll(".galeria a");
const ref = document.querySelector(".modal img");
const botones = document.querySelectorAll(".modal button");

const arrayEnlaces = Array.from(enlaces);
let actual = 0;

enlaces.forEach((enlace, i) => {
    enlace.addEventListener("click", e => {
        e.preventDefault();
        actual = i;
        ref.setAttribute("src", enlace.getAttribute("href"));
        modal.classList.add("visible");
    });
});

modal.addEventListener("click", () => {
    modal.classList.remove("visible");
});

botones.forEach((boton, i) => {
    boton.addEventListener("click", e => {
        e.stopPropagation();
        if (i == 0) {
            // izquierda
            actual = actual > 0 ? actual - 1 : arrayEnlaces.length - 1;
        } else {
            // derecha
            actual = actual < arrayEnlaces.length - 1 ? actual + 1 : 0;
        }
        ref.setAttribute("src", arrayEnlaces[actual].getAttribute("href"));
    });
});