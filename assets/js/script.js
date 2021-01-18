let timerEl = document.getElementById('timer');
let questionEl = document.getElementById('question1');
let one = document.getElementById('1');
let two = document.getElementById('2');
let three = document.getElementById('3');
let four = document.getElementById('4');
let form = document.getElementById('form');
let displayScores = localStorage.getItem('name');
let displayNames = localStorage.getItem('score');
let options = document.getElementById('options');
let savedNames = [];
let savedScores = [];
let savedName;
let savedScore;
// let savedNames = [];
// let savedScores = [];
let timeClear;
let score = 100;
let timer = 60;

// Subtracts points from score for wrong answer
let wrongAnswer = function() {
    score = score - 25;
    return score;
}

// Subtracts time from timer as a penalty for selecting wrong answer
let timerPenalty = function() {
    timer = timer - 10;
    return timer;
}

// Timer starts after Start button is pressed and first question is called
let beginTimer = function() {

    let countdown = function() {
        timer--;
        timerEl.textContent = "Time:" + timer;
        if (timer === 0) {
            endTimer();
            end();
            alert("Time is up!");
        }
        
    }


    let timeInterval = setInterval(countdown, 1000); 
    let endTimer = function() {
        clearInterval(timeInterval);
    }

    timeClear = endTimer;

    q1();
}

// Display first question and answer choices
let q1 = function() {
    questionEl.innerHTML = 'How do you write "Hello World" in an alert box?';

    one.innerHTML = '<button id="a">alertBox("Hello World");</button>';
    two.innerHTML = '<button id="b">console.log("Hello World");</button>';
    three.innerHTML = '<button id="c">alert("Hello World");</button>';
    four.innerHTML = '<button id="d">prompt("Hello World");</button>';

    let a = document.getElementById("a");
    let b = document.getElementById("b");
    let c = document.getElementById("c");
    let d = document.getElementById("d");
    

    // function selectOne() {
        let yourAnswer = function() {
            wrongAnswer();
            timerPenalty();
            q2();            
        }

        a.addEventListener("click", yourAnswer);
        b.addEventListener("click", yourAnswer);
        c.addEventListener("click", q2);
        d.addEventListener("click", yourAnswer);
    // }

    // selectOne();      
} 

// Display second question and answer choices
let q2 = function() {
    questionEl.innerHTML = "A very useful tool used during development and debugging for printing content in the debugger";

    one.innerHTML = '<button id="e">javascript</button>';
    two.innerHTML = '<button id="f">console.log</button>';
    three.innerHTML = '<button id="g">for loops</button>';
    four.innerHTML = '<button id="h">terminal/bash</button>';

    let e = document.getElementById("e");
    let f = document.getElementById("f");
    let g = document.getElementById("g");
    let h = document.getElementById("h");

    // function selectTwo() {
        let yourAnswer = function() {
            wrongAnswer();
            timerPenalty();
            q3();
        }

        e.addEventListener("click", yourAnswer);
        f.addEventListener("click", q3);
        g.addEventListener("click", yourAnswer);
        h.addEventListener("click", yourAnswer);
    // }

    // selectTwo();  
} 

// Display third question and answer choices
let q3 = function() {    
    questionEl.innerHTML = "String values must be enclosed with ____ when being assigned to variables";
    
    one.innerHTML = '<button id="i">Commas</button>';
    two.innerHTML = '<button id="j">Curly Brackets</button>';
    three.innerHTML = '<button id="k">Parentheses</button>';
    four.innerHTML = '<button id="l">Quotes</button>';

    let i = document.getElementById("i");
    let j = document.getElementById("j");
    let k = document.getElementById("k");
    let l = document.getElementById("l");


    // function selectThree() {
        let yourAnswer = function() {
            wrongAnswer();
            timerPenalty();
            q4();
        }

        i.addEventListener("click", yourAnswer);
        j.addEventListener("click", yourAnswer);
        k.addEventListener("click", yourAnswer);
        l.addEventListener("click", q4);
    // }

    // selectThree(); 
}

// Display fourth question and answer choices
let q4 = function() {    
    questionEl.innerHTML = "Commonly used data types do NOT include:";
    
    one.innerHTML = '<button id="m">Strings</button>';
    two.innerHTML = '<button id="n">Alerts</button>';
    three.innerHTML = '<button id="o">Boolean</button>';
    four.innerHTML = '<button id="p">Integer</button>';

    let m = document.getElementById("m");
    let n = document.getElementById("n");
    let o = document.getElementById("o");
    let p = document.getElementById("p");


    // function selectFour() {
        let yourAnswer = function() {
            wrongAnswer();
            timerPenalty();
            end();
        }

        m.addEventListener("click", yourAnswer);
        n.addEventListener("click", end);
        o.addEventListener("click", yourAnswer);
        p.addEventListener("click", yourAnswer);
    // }

    // selectFour();   
}

// End of quiz - Displays Score and Form
let end = function() {
    
    console.log(score);
    form.innerHTML = '<div id="reset"><button onclick="window.location.reload();">Retry</button></div><form id="the-form"><label id="your-score-txt"></label></><input type="text" id="yourtext" name="name" placeholder=" Your Name Here"></input><input type="submit" value="Submit" text="submit" id="submit-me"></input></form>'
    let finalScore = document.getElementById('your-score-txt');
    finalScore.textContent = "Your Score:" + " " + score;
    let theForm = document.getElementById('the-form');
    
    
    
    

    let results = function() {

        savedName = document.getElementById('yourtext').value;
        savedScore = score;

       
           
        // savedNames.push("" + savedName);
        // savedScores.push("" + savedScore);

        localStorage.setItem("name", savedName);
        localStorage.setItem("score", savedScore);

        // let submitBtn = document.getElementById("submit-me")
        // submitBtn.addEventListener("click", showScore);

        showScore();
        
    }
    
    
    // Stops timer if quiz is complete before time runs out
    if (timer > 0) {
        timeClear();
    }

    let submit = document.getElementById('submit-me');
    submit.addEventListener("click", function(event){
        event.preventDefault()
      });
    submit.addEventListener("click", results);    
}

let showScore = function() {
    form.innerHTML = '<div id="all-scores"><h1>High Scores</h1><div class="container"><ul id="stored-scores" class="userscore"></ul><ul id="stored-names" class="username"></ul></div></div>';
    options.innerHTML = '<div id="reset"><button onclick="window.location.reload();">Retry</button></div>';
    let storedScores = document.getElementById("stored-scores");
    let storedNames = document.getElementById("stored-names");
    displayNames = localStorage.getItem('score');
    displayScores = localStorage.getItem('name');
    storedScores.innerHTML = "<li>" + displayScores + "</li>";
    storedNames.innerHTML = "<li>" + displayNames + "</li>";
    // let storedNames = document.getElementById("stored-names");
    // let storedScores = document.getElementById("stored-scores");
    
    // let displayScores = localStorage.getItem('name');
    // let displayNames = localStorage.getItem('score');
    // storedNames.textContent = displayNames;
    // storedScores.textContent = displayScores;
    // form.appendChild(allScores);
    // console.log(allScores);

    console.log(displayScores);
    console.log(displayNames);
}

let pullData = function() {
    // let storedNames = document.getElementById("stored-names");
    // let storedScores = document.getElementById("stored-scores");
    // displayScores = localStorage.getItem('name');
    // displayNames = localStorage.getItem('score');
    // storedNames.textContent = displayNames;
    // storedScores.textContent = displayScores;
}


pullData();

start.onclick = beginTimer;