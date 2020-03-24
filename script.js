window.onload = function() {
  const rockBtn = document.getElementById("Rock");
  const paperBtn = document.getElementById("Paper");
  const scissorsBtn = document.getElementById("Scissors");
  
  function game() {
    function compPlay() {
      let actions = ["Rock", "Paper", "Scissors"];
      let randAct = actions[Math.floor(Math.random() * actions.length)];
      return randAct;
    }
    let playerScore = 0;
    let cpuScore = 0;
    function playGame(playerSelect, compSelect) {
      compSelect = compPlay();
      playerDiv = document.getElementById("playerScore");
      cpuDiv = document.getElementById("cpuScore");
      if (playerSelect == "Rock" && compSelect == "Rock") {
        console.log("Tie! No winner or loser here.");
      } else if (playerSelect == "Paper" && compSelect == "Paper") {
        console.log("Tie! No winner or loser here.");
      } else if (playerSelect == "Scissors" && compSelect == "Scissors") {
        console.log("Tie! No winner or loser here.");
      } else if (playerSelect == "Rock" && compSelect == "Paper") {
        console.log("Loser! Paper beats rock.");
        cpuScore++;
        cpuDiv.innerHTML = "CPU Score: " + cpuScore;
      } else if (playerSelect == "Paper" && compSelect == "Scissors") {
        console.log("Loser! Scissors beats paper.");
        cpuScore++;
        cpuDiv.innerHTML = "CPU Score: " + cpuScore;
      } else if (playerSelect == "Scissors" && compSelect == "Rock") {
        console.log("Loser! Rock beats scissors.");
        cpuScore++;
        cpuDiv.innerHTML = "CPU Score: " + cpuScore;
      } else if (playerSelect == "Scissors" && compSelect == "Paper") {
        console.log("Winner! Paper beats rock.");
        playerScore++;
        playerDiv.innerHTML = "Player Score: " + playerScore;
      } else if (playerSelect == "Paper" && compSelect == "Rock") {
        console.log("Winner! Paper beats rock.");
        playerScore++;
        playerDiv.innerHTML = "Player Score: " + playerScore;
      } else {
        playerSelect == "Rock" && compSelect == "Scissors";
        console.log("Winner! Rock beats scissors.");
        playerScore++;
        playerDiv.innerHTML = "Player Score: " + playerScore;
      }
      if (playerScore == 5) {
        alert("You win!");
      }
      if (cpuScore == 5) {
        alert("You lose!");
      }
    }
    rockBtn.addEventListener("click", function() {
      playGame("Rock");
    });
    paperBtn.addEventListener("click", function() {
      playGame("Paper");
    });
    scissorsBtn.addEventListener("click", function() {
      playGame("Scissors");
    });
  }
  game();
};
