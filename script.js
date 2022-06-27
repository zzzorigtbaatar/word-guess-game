//Initial global variables
var timerLimit = 60000;
var timerText = "";
var currentWord1 = "_";
var currentWord2 = "_";
var currentWord3 = "_";


//object for player
// var player = {
//     // winScore: winScore.value,
//     // lossScore: lossScore.value,
// }

// set object to local storage
localStorage.setItem("playerStringified", JSON.stringify(player));

//starts the game
function init() {
    // resetTimer();
    // displayTimer();
    // displayScores();
    displaySecretWord();
}


//resets timer to 1 minute/60000 milliseconds
function resetTimer() {
    timerLimit = 60000;
}

//displays the current time on timer
function displayTimer() {
    document.getElementById("#timer").textContent = "You have " + timerLimit + " milliseconds.";
}

//displays the locally stored scores, if there is any.
function displayScores() {
    var latestWinScore = JSON.parse(localStorage.getItem("playerStringified")).winScore;
    var latestLossScore = JSON.parse(localStorage.getItem("playerStringified")).lossScore;

    if (localStorage.getItem("playerWins") !== null) {
        document.getElementById('winsText').textContent = latestWinScore;
        document.getElementById('lossesText').textContent = latestLossScore;
    }
}
//testing branch stuff here
//displays the secret word as underscores initially and then reveals letters if correctly pressed
function displaySecretWord() {
    // var secretWord = 
    // document.getElementById("saved-name").innerHTML = lastGrade.student;
    document.getElementById("wordscreen").innerHTML = current1 + currentWord2 + currentWord3;
    console.log("displaySecretWord is running");

}

// document.getElementById("wordscreen").innerHTML = secretWord;

// begins timer until it reaches 0.
function startTimer() {
    for (var i = timerLimit; i > 0; i - 1000) {
        // timerText = "There are " + timerLimit + " milliseconds left!";
        document.getElementById("#timer").textContent = "There are " + timerLimit + " milliseconds left!";
    }
    if (timerLimit === 0) {
        document.getElementById("#timer").textContent = "Time's Up!";
    }

}

//checks if game timer can start
startButton.addEventListener("click", function(event) {
    startTimer();
  });



//checks if keys pressed matches
document.addEventListener('keydown', logKey);

function logKey(){

    var element = document.target;
   
    if (element == "c") {
      currentWord1 = "C";
    } else if (element == "a"){
        currentWord2 = "A";
    } else if (element == "t"){
        currentWord3 = "T";
    }

}

init();
