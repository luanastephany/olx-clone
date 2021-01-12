function changeImage() {
    const fundo = document.getElementById("fundo");
    const principal = document.getElementById("principal");

    const items = document.querySelectorAll(".slider .item");

    function mudarImagem(event) {
        const clicado = event.target;
        fundo.src = clicado.src;
        principal.src = clicado.src;

        const selected = document.getElementsByClassName('selected')[0];
        selected.classList.remove("selected")

        clicado.classList.add("selected")
    }

    function adicionarListener(item) {
        item.addEventListener('click', mudarImagem)

    }

    items.forEach(adicionarListener)
}

changeImage();
feather.replace();
