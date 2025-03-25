document.addEventListener("DOMContentLoaded", function () {
    const musicList = document.getElementById("music-list");
    const searchInput = document.getElementById("search");

    const songs = [
        { title: "Música 1", file: "https://drive.google.com/uc?export=download&id=1AbCdEfGhIjKLM" },
        { title: "Música 2", file: "https://www.mediafire.com/file/abc123/musica.mp3" },
        { title: "Música 3", file: "https://www.dropbox.com/s/xyz123/musica.mp3?dl=1" }
    ];

    function displaySongs(filter = "") {
        musicList.innerHTML = "";
        songs
            .filter(song => song.title.toLowerCase().includes(filter.toLowerCase()))
            .forEach(song => {
                const songElement = document.createElement("div");
                songElement.classList.add("music-item");
                songElement.innerHTML = `
                    <p>${song.title}</p>
                    <a href="${song.file}" class="download-btn">Baixar</a>
                `;
                musicList.appendChild(songElement);
            });
    }

    searchInput.addEventListener("input", () => {
        displaySongs(searchInput.value);
    });

    displaySongs();
});
