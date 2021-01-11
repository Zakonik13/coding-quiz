var timerEl = document.getElementById('timer');
var headerEl = document.getElementById('header');
var startBtn = document.getElementById('start');

var timer = 60;

// Timer starts after Start button is pressed 
var beginTimer = function() {

    var countdown = function() {
        timer--;
        timerEl.textContent = "Time:" + timer;
        if (timer === 0) {
            endTimer();
        }
        
    }

    var timeInterval = setInterval(countdown, 1000); 
    var endTimer = function() {
        clearInterval(timeInterval);
    }
}
// Display first question
// Display second question
// Display third question
// 
start.onclick = beginTimer;