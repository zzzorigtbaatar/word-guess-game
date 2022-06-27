//Initial global variables
var timerLimit = 60000;
var timerText = "";


//object for player
var player = {
    winScore: winScore.value,
    lossScore: lossScore.value,
}

// set object to local storage
localStorage.setItem("playerStringified", JSON.stringify(player));

//starts the game
function init(){
    resetTimer();
    displayTimer();
    displayScores();
    displaySecretWord();
}


//resets timer to 1 minute/60000 milliseconds
function resetTimer(){
    timerLimit = 60000;
}

//displays the current time on timer
function displayTimer(){

}

//displays the locally stored scores, if there is any.
function displayScores(){
    var latestWinScore = JSON.parse(localStorage.getItem("playerStringified")).winScore;
    var latestLossScore = JSON.parse(localStorage.getItem("playerStringified")).lossScore;

    if (localStorage.getItem("playerWins") !== null){
        document.getElementById("winsText").textContent = latestWinScore;
        document.getElementById("lossesText").textContent = latestLossScore;
    }
}

//displays the secret word as underscores initially and then reveals letters if correctly pressed
function displaySecretWord(){

}

// begins timer until it reaches 0.
function startTimer(){
    for (var i = timerLimit; i > 0; i - 1000){
        // timerText = "There are " + timerLimit + " milliseconds left!";
        document.getElementById("#timer").textContent = "There are " + timerLimit + " milliseconds left!";
    }
    if (timerLimit === 0){
        document.getElementById("#timer").textContent = "Time's Up!";
    }
    
}



init();
