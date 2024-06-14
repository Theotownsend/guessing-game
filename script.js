const containerEl = document.querySelector(".container");
const btnPlayEl = document.querySelector(".btn_again");
const btnCheckEl = document.querySelector(".btn_check");
const hideNumEl = document.querySelector(".hide_num");
const msgEl = document.querySelector(".message");
const inputNumtEl = document.querySelector(".input_number");
const highScoreEl = document.querySelector(".high_score");
const attemptsEl = document.querySelector(".attempts");

// generate random number form 1 to 20
let secretNum = Math.trunc(Math.random() * 100 + 1);
let attempts = 5;
// console.log(secretNum);
//event to check the hidden number
btnCheckEl.addEventListener("click", () => {
  const guess = Number(inputNumtEl.value);

  const displayMessage = function (message) {
    msgEl.textContent = message;
  };

  //event to play again
  btnPlayEl.addEventListener("click", () => {
    attempts = 5;
    secretNum = Math.floor(Math.random() * 100) + 1;
    attemptsEl.textContent = attempts;
    hideNumEl.textContent = "?";
    hideNumEl.style.width = "25%";
    hideNumEl.style.transition = "all 0.5s ease-in";
    hideNumEl.value = "";
    containerEl.style.backgoundColor = "#ddd";
    displayMessage("Start Guessing");
  });
  //check empty input
  if (guess) {
    //not match hiden number
    if (guess != secretNum) {
      if (attempts > 1) {
        attempts--;
        attemptsEl.textContent = `Number of  attempts: ${attempts}`;

        msgEl.textContent =
          guess > secretNum ? " OOps!! Too high! 🤯" : "Whoops!! Too low! 🤔";
        attemptsEl.textContent = `Number of  attempts:: ${attempts}`;
      } else {
        displayMessage("You lost the game! 🤦‍♂️");
        msgEl.style.color = "#ff0000";
        containerEl.style.backgoundColor = "#fff";
        attemptsEl.textContent = 0;
        hideNumEl.textContent = secretNum;
      }
    } else {
      // success
      hideNumEl.textContent = secretNum;
      hideNumEl.style.width = "50%";
      hideNumEl.style.transition = "all 0.5s ease-in";
      containerEl.style.backgoundColor = "#e0d8d3";
      displayMessage(" Congratulations! You won! 🎉 :)");
      highScoreEl.style.color = "red";
    }
  } else {
    displayMessage("Please enter a number :(");
  }
});
