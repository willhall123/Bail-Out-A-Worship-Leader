var bailBtn = document.querySelector("#worshipSong");
var songOpt = [ "10,000 Reasons - Matt Redman", "All The Earth - Vertical Church", "Break Every Chain - Tosha Cobbs", "Broken Vessels - Hillsong", "Build My Life - Pat Barret", "Call Upon The Lord - Elevation Worship", "Came To My Rescue - Hillsong" ];
var useSongOpt;

function writeSong() {
    var song = generateSong();
    var songText = document.querySelector("#song");
    songText.value = song;
}

function generateSong() {
    var values = "";
    var song = "";
    var options = confirm("Pick any song?");
    var possibleSongsLength = values.length;

    if (useSongOpt) {
        values = values.concat(songOpt);
        console.log(song);
    }

    if (options) {
        values = values.concat(options);
        console.log(song);
    }

    var possibleSongsLength = values.length;

    for (var i = 0; i < song; i++) {
        var randomSong = Math.floor(Math.random() * possibleSongsLength);
        var randomValue = values.charAt(randomSong);
        song = song.concat(randomValue);
        console.log(randomValue);
    }
    return song;
}

bailBtn.addEventListener("click", writeSong);

// var generateBtn = document.querySelector("#generate");
// var characters = [ "10,000 Reasons - Matt Redman", "All The Earth - Vertical Church", "Break Every Chain - Tosha Cobbs", "Broken Vessels - Hillsong", "Build My Life - Pat Barret", "Call Upon The Lord - Elevation Worship", "Came To My Rescue - Hillsong" ];
// var lowerCaseLetters = characters.toLowerCase();
// var upperCaseLetters = characters.toUpperCase();
// var numaricCharacters = "0123456789";
// var specialCharacters = "!#$%&'()*+,-./;:<=>?@[\]^_`{|}~ ";
// var useLowerCase;
// var useUpperCase;
// var useNumericrCharacters;
// var useSpecialCharacters;

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// function generatePassword(){
//   var values = "";
//   var password = "";
//   var numberCharacters = parseInt(prompt("How many characters? Must be between 8-128"));
//   var useLowerCase = confirm("Use lowercase letters?");
//   var useUpperCase = confirm("Use uppercase letters?");
//   var useNumericCharacters = confirm("Use numbers characters?");
//   var useSpecialCharacters = confirm("Use special characters?");
  

//   if (useLowerCase) {
//     values = values.concat(lowerCaseLetters);
//     console.log(password);
//   }
  
//   if (useUpperCase) {
//     values = values.concat(upperCaseLetters);
//     console.log(password);
//   }

//   if (useNumericCharacters) {
//     values = values.concat(numaricCharacters);
//     console.log(password);
//   }

//   if (useSpecialCharacters) {
//     values = values.concat(specialCharacters);
//     console.log(password);
//   }
  
//   var possibleCharactersLength = values.length;
  
//   for (var i = 0; i < numberCharacters; i++) {
//     var randomNumber = Math.floor(Math.random() * possibleCharactersLength);
//     var randomValue = values.charAt(randomNumber);
//     password = password.concat(randomValue);
//     console.log(password)
// }

//    return password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);