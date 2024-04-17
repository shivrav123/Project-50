let sounds = ["applause", "boo", "victory", "tada", "gasp", "wrong"];

sounds.forEach(sound => {
    let btn = document.createElement("button");
    btn.classList.add("btn");

    btn.innerText = sound;

    btn.addEventListener("click", () => {
        stopSongs();

        document.getElementById(sound).play();
    });

    document.querySelector("#buttons").appendChild(btn);
});

function stopSongs() {
    sounds.forEach(sound => {
        let song = document.getElementById(sound);

        song.pause();
        song.currentTime = 0;

    });
};