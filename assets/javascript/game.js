var win = 0;
var loss = 0;
var guesses = 10;
var guessedLetters = [];
var pickedWord = "";
var pickedWordPlaceholder = [];
var wrongLetters = [];
var wordBank = ["barbeque", "swimming", "roadtrip", "beach", "popsicle"];
var gameRunning = false;
var imgArr = ["assets/images/bulldog.jpeg", "assets/images/lazy.jpeg", "assets/images/baby.jpeg", "assets/images/orangutan.jpeg", "assets/images/sprinklers.jpg"]

function newGame() {
    guesses = 10;
    guessedLetters = [];
    pickedWord = "";
    pickedWordPlaceholder = [];
    wrongLetters = [];
    gameRunning = true;

    pickedWord = wordBank[Math.floor((Math.random() * wordBank.length))];

    for (var i = 0; i < pickedWord.length; i++) {
        pickedWordPlaceholder.push("_");
    }

    document.getElementById("img-here").src = imgArr[Math.floor((Math.random() * imgArr.length))];
    document.getElementById("currentWord").textContent = pickedWordPlaceholder.join(" ");
    document.getElementById("guesses").textContent = guesses;
    document.getElementById("alreadyGuessed").textContent = wrongLetters.join(", ");
    document.getElementById("myAudio").pause();
}

function evaluateGuess(letter) {
    if (gameRunning === true && guessedLetters.indexOf(letter) === -1) {
        // run game here
        guessedLetters.push(letter);
        for (var i = 0; i < pickedWord.length; i++) {
            if (pickedWord[i].toLowerCase() === letter.toLowerCase()) {
                pickedWordPlaceholder[i] = pickedWord[i];
            }
        }
        document.getElementById("currentWord").innerHTML = pickedWordPlaceholder.join(" ");
        isWrong(letter);
        checkWin();
    }
}

function lose() {
    if (guesses == 0) {
        loss++;
        alert("You done goofed.");
        document.getElementById("lose").textContent = loss;
        return;
    }
}

function isWrong(letter) {
    if (pickedWordPlaceholder.indexOf(letter.toLowerCase()) === -1 && pickedWordPlaceholder.indexOf(letter.toUpperCase()) === -1) {
        guesses--;
        wrongLetters.push(letter);
        document.getElementById("guesses").textContent = guesses;
        document.getElementById("alreadyGuessed").textContent = wrongLetters.join(", ");
    }
    lose();
}

function checkWin() {
    if (pickedWordPlaceholder.indexOf("_") === -1) {
        win++;
        document.getElementById("wins").textContent = win;
        document.getElementById("myAudio").play();
        alert("I ALWAYS BELIEVED IN YOU.");
    }
}

// key/load functions
document.onkeyup = function (event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        evaluateGuess(event.key);
    }
}

window.onload = function () {
    newGame();
    document.getElementById("newgamebtn").addEventListener("click", newGame);
}

/*
function showTheOutput() {
    document.getElementById("startMsg").textContent = "";
    document.getElementById("wins").textContent = "Wins: " + win;
    document.getElementById("guesses").textContent = "Guesses remaining: " + guesses;
    document.getElementById("alreadyGuessed").textContent = "Letters already guessed: " + guessedLetters;
}
*/


/*
document.onkeydown = function (event) {
    var letter = event.key.toLowerCase();

    for (var i = 0; i < wordBank[Math.floor((Math.random() * wordBank.length))].length; i++) {
        guessThisWord.push("_");
    }

    if (guesses == 0) {
        newGame();

    } else if (guesses > 0 && event.keyCode >= 65 && event.keyCode <= 90) {

        if (guessedArray.indexOf(letter) === -1) {
            guessedArray.push(letter);

            if (positions.length <= 0) {
                guesses--;
            } else {
                for (var i = 0; i > positions.length; i++) {
                    guessThisWord[positions[i]] = letter;
                }
            }
        }
    }
    showTheOutput();
    checkWin();
}

    if (round == 1) {

        var index = firstword.indexOf(userGuess);

        // when user key input matches the first word
        if (index > -1) {
            // add user key input to matchArray
            matchArray.push(userGuess);
            // for loop for if index matches, print out textContent with updated firstword (with underscores and matched letters)
            for (var i = 0; i < firstword.length; i++) {
                if (matchArray.indexOf(firstword[i]) > -1) {
                    console.log(matchArray.indexOf(firstword[i]));
                    document.getElementById("theWord").textContent = firstword[i];
                } // if
                else {
                    document.getElementById("theWord").textContent = "_";
                }
                showTheOutput();
            } // for
        } else {
            // add user key input to guessArray
            guessArray.push(userGuess);
            showTheOutput();
            return;
        } // else

    } else if (round == 2) {

    } // round 2 
    else if (round == 3) {

    } // round 3

} // function

// TODO (after Ron's advice)
// populate array with letters
// use indexOf()
// 3 arrays: 1) array of word to guess, 2) array of matched letters, 3) array of guessed letters
// for loop wordArray
// start the game and start letter guessing with another key press
// don't accept non-letters
// alert windows when user wins and/or loses
// create a function that'll automatically set up the next round

    if (guesses > -1) {

        if (userGuess == "b") {
            roundOne.splice(0, 1, "B");
            roundOne.splice(3, 1, "B");
            roundOne;
            $("#theWord").html(roundOne.join(" "));
            guesses--;
        } else if (userGuess == "a") {
            roundOne.splice(1, 1, "A");
            roundOne;
            $("#theWord").html(roundOne.join(" "));
            guesses--;
        } else if (userGuess == "r") {
            roundOne.splice(2, 1, "R");
            roundOne;
            $("#theWord").html(roundOne.join(" "));
            guesses--;
        } else if (userGuess == "e") {
            roundOne.splice(4, 1, "E");
            roundOne.splice(7, 1, "E");
            roundOne;
            $("#theWord").html(roundOne.join(" "));
            guesses--;
        } else if (userGuess == "q") {
            roundOne.splice(5, 1, "Q");
            roundOne;
            $("#theWord").html(roundOne.join(" "));
            guesses--;
        } else if (userGuess == "u") {
            roundOne.splice(6, 1, "U");
            roundOne;
            $("#theWord").html(roundOne.join(" "));
            guesses--;
        } else {
            guessedLetters.push(userGuess.toUpperCase());
            guesses--;
        }
}

*/