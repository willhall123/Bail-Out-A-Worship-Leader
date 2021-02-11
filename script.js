var bailBtn = document.querySelector("#worshipSong");
var songOpt = [ "10,000 Reasons - Matt Redman", "All The Earth - Vertical Church", "Break Every Chain - Tosha Cobbs", "Broken Vessels - Hillsong", "Build My Life - Pat Barret", "Call Upon The Lord - Elevation Worship", "Came To My Rescue - Hillsong" ];
var useSongOpt;

function writeSong() {
    var song = generateSong();
    var songText = document.querySelector("song");
    songText.value = song;
}

function generateSong() {
    var values = "";
    var song = "";
    // var options = prompt("pick a song?");
    var possibleSongsLength = values.length;

    // if (options) {
    //     values = values.concat(songOpt);
    //     console.log(song);
    // }

    for (var i = 0; i < songOpt; i++) {
        var randomSong = Math.floor(Math.random() * possibleSongsLength);
        var randomValue = values.charAt(randomSong);
        song = song.concat(randomValue);
        console.log(song);
    }
    return song;
}

bailBtn.addEventListener("click", writeSong);