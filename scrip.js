document.getElementById("boton-tema").addEventListener("click", () => {
    const body = document.body;
    if (body.classList.contains("tema-claro")) {
        body.classList.remove("tema-claro");
        body.classList.add("tema-oscuro");
    } else {
        body.classList.remove("tema-oscuro");
        body.classList.add("tema-claro");
    }
});