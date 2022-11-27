
// Select Players Score
let player1Score = document.querySelector(".player1-score");
let player2Score = document.querySelector(".player2-score");

// Select Win Score
let winScoreDisplay = document.querySelector(".win-score span");

// Select Win Score Value
let winScoreValue = document.getElementById("win-score-value");

// Select Players Button
let player1Btn = document.querySelector(".player1-btn");
let player2Btn = document.querySelector(".player2-btn");

// Select Reset Button
let resetScore = document.getElementById("reset");

// Default Score
let player1 = parseInt(player1Score.innerHTML);
let player2 = parseInt(player2Score.innerHTML);

let winScoreNum = parseInt(winScoreDisplay.innerHTML);

// Increse Player 1 Value
player1Btn.addEventListener('click', () => {
    player1++;
    player1Score.textContent = player1;

    if (player1 === winScoreNum) {
        player1Btn.setAttribute("disabled", "disabled");
        player2Btn.setAttribute("disabled", "disabled");
    }
})

// Increase Player 2 Value
player2Btn.addEventListener('click', () => {
    player2++;
    player2Score.textContent = player2;

    if (player2 === winScoreNum) {
        player1Btn.setAttribute("disabled", "disabled");
        player2Btn.setAttribute("disabled", "disabled");
    }
})





