// declaring and initializing variables for wins, guesses, guessed letters and words as arrays
var win = 0;
var guesses = 13;
var guessedLetters = [];

var allTheWords = {
    // first word = barbeque
    "firstword": ["_", "_", "_", "_", "_", "_", "_", "_"],
    // second word = brother
    "secondword": ["_", "_", "_", "_", "_", "_", "_", "_"],
    // third word = bumblebee
    "thirdword": ["_", "_", "_", "_", "_", "_", "_", "_","_","_"]
};

var roundOne = allTheWords.firstword;
var roundTwo = allTheWords.secondword;
var roundThree = allTheWords.thirdword;

document.onkeyup = function (event) {
    // Determines which key was pressed.
    var userGuess = event.key;

    document.getElementById("startMsg").textContent = "";


    // switch everything to js. i can't deal with jquery anymore.
    $("#wins").html("Wins: " + win);

    $("#currentWord").html("Current Word");
    $("#theWord").html(roundOne.join(" "));

    $("#guesses").html("Number of guesses remaining: " + guesses);
    $("#alreadyGuessed").html("Letters already guessed: " + guessedLetters);



    if (userGuess == "b" && guesses > -1) {
        roundOne.splice(0, 1, "B");
        roundOne.splice(3, 1, "B");
        roundOne;
        $("#theWord").html(roundOne.join(" "));
        guesses--;
    } else if (userGuess == "a" && guesses > -1) {
        roundOne.splice(1, 1, "A");
        roundOne;
        $("#theWord").html(roundOne.join(" "));
        guesses--;
    } else if (userGuess == "r" && guesses > -1) {
        roundOne.splice(2, 1, "R");
        roundOne;
        $("#theWord").html(roundOne.join(" "));
        guesses--;
    } else if (userGuess == "e" && guesses > -1) {
        roundOne.splice(4, 1, "E");
        roundOne.splice(7, 1, "E");
        roundOne;
        $("#theWord").html(roundOne.join(" "));
        guesses--;
    } else if (userGuess == "q" && guesses > -1) {
        roundOne.splice(5, 1, "Q");
        roundOne;
        $("#theWord").html(roundOne.join(" "));
        guesses--;
    } else if (userGuess == "u" && guesses > -1) {
        roundOne.splice(6, 1, "U");
        roundOne;
        $("#theWord").html(roundOne.join(" "));
        guesses--;
    } else {
        guessedLetters.push(userGuess.toUpperCase());
        guesses--;
    }
});

// TO DO:
// 1. think of a word
// 2. create the _ for each letter
// 3. show number of guesses
// 4. when user selects key, determine if it is correct or not.
//      a.if it is correct, show on the line.
//      b. if not, show under "letters already guessed."
//      c. repeat until user guesses each letter correctly with guesses still remaining. 
// 5. when user wins, tally ++ for "wins"
// 6. when user enters any key, pop up a new word and restart