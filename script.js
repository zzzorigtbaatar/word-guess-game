//Initial global variables
var timerLimit = 60000;
var currentTime = 0;
var timerText = "";
var currentWord1 = "_";
var currentWord2 = "_";
var currentWord3 = "_";


// object for player
var player = {
    // winScore: winScore.value,
    // lossScore: lossScore.value,
    winScore: 99,
    lossScore: 1,
}



//starts the game
function init() {
    // set object to local storage
    // if (localStorage.getItem("playerStringified") === null) {
    //     localStorage.setItem("playerStringified", JSON.stringify(player));
    // }
    // resetTimer();
    // displayTimer();
    // displayScores();
    // displaySecretWord();
}


//resets timer to 1 minute/60000 milliseconds
function resetTimer() {
    currentTime = timerLimit;
    console.log("current timer has been reset");
}

//displays the current time on timer
function displayTimer() {
    document.getElementById("timer").innerHTML = "You only get " + currentTime + " milliseconds.";
}

//displays the locally stored scores, if there is any.
function displayScores() {
    var latestWinScore = JSON.parse(localStorage.getItem("playerStringified")).winScore;
    var latestLossScore = JSON.parse(localStorage.getItem("playerStringified")).lossScore;

    if (latestWinScore !== null && latestLossScore !== null) {
        document.getElementById('winsText').innerHTML = latestWinScore;
        document.getElementById('lossesText').innerHTML = latestLossScore;
    }
}
//testing branch stuff here
//displays the secret word as underscores initially and then reveals letters if correctly pressed
function displaySecretWord() {
    // var secretWord = 
    // document.getElementById("saved-name").innerHTML = lastGrade.student;
    document.getElementById("wordscreen").innerHTML = currentWord1 + " " + currentWord2 + " " + currentWord3;
    console.log("displaySecretWord is running");

}

// document.getElementById("wordscreen").innerHTML = secretWord;

// begins timer until it reaches 0.
function startTimer() {
    resetTimer();
    for (var i = currentTime; i > 0; i - 1000) {
        setInterval(function () {
            if (timerLimit === 0) {
                console.log("timerLimit is at 0");
                document.getElementById("timer").innerHTML = "Time's Up!";
            } else {
                // timerText = "There are " + timerLimit + " milliseconds left!";
                console.log("timerLimit is at" + currentTime);
                document.getElementById("timer").innerHTML = "There are " + currentTime + " milliseconds left!";
                currentTime -= 1000;
            }
        }, 1000);
    }



}

function playGame(){
    console.log("startbutton was clicked");
    startTimer();
}

//checks if game timer can start
startbutton.addEventListener("click", playGame());



//checks if keys pressed matches
// document.addEventListener('keydown', logKey);

// function logKey() {

//     var element = document.target;

//     if (element == "c") {
//         currentWord1 = "C";
//     } else if (element == "a") {
//         currentWord2 = "A";
//     } else if (element == "t") {
//         currentWord3 = "T";
//     }

// }

init();
