document.addEventListener("DOMContentLoaded", function () {
    const musicList = document.getElementById("music-list");

    const songs = [
        { title: "Música 1", file: "https://www.mediafire.com/file/SUA_MUSICA.mp3" },
        { title: "Música 2", file: "https://drive.google.com/uc?export=download&id=SEU_ID_AQUI" },
        { title: "Música 3", file: "https://www.dropbox.com/s/SUA_MUSICA.mp3?dl=1" }
    ];

    songs.forEach(song => {
        const songElement = document.createElement("div");
        songElement.classList.add("music-item");
        songElement.innerHTML = `
            <p>${song.title}</p>
            <a href="${song.file}" class="download-btn">Baixar</a>
        `;
        musicList.appendChild(songElement);
    });
});
