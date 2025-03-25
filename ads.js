document.querySelectorAll(".download-btn").forEach(btn => {
    btn.addEventListener("click", function (event) {
        event.preventDefault();
        const adLink = "https://shorte.st/st/YOUR_LINK"; // Troque pelo seu link de monetização
        window.open(adLink, "_blank");
        setTimeout(() => {
            window.location.href = this.href;
        }, 5000); // Redireciona após 5 segundos
    });
});
