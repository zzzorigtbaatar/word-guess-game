//Initial global variables
var timerLimit = 60000;
var timerText = "";

//resets timer to 1 minute/60000 milliseconds
function resetTimer(){
    timerLimit = 60000;
}

function startTimer(){
    for (var i = timerLimit; i > 0; i - 1000){
        timerText = "There are " + timerLimit + " milliseconds left!";
    }

    
}