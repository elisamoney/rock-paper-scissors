const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

let userScore = 0;
let computerScore = 0;

function main() {
    rock_div.addEventListener("click", () => game("r"));
    paper_div.addEventListener("click", () => game("p"));
    scissors_div.addEventListener("click", () => game("s"));
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random()*3); 
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(user, computer) {
    const userChoice_div = document.getElementById(user);
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertToWord(user)} beats ${convertToWord(computer)}. You win!`
    userChoice_div.classList.add("green-glow");
    setTimeout(() => userChoice_div.classList.remove("green-glow"), 400);
    congrats();
}

function lose(user, computer) {
    const userChoice_div = document.getElementById(user);
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(user)} loses to ${convertToWord(computer)}. You lose. :(`
    userChoice_div.classList.add("red-glow");
    setTimeout(() => userChoice_div.classList.remove("red-glow"), 400);
    congrats();
}

function draw(user, computer) {
    const userChoice_div = document.getElementById(user);
    result_p.innerHTML = `It's a draw!`
    userChoice_div.classList.add("purple-glow");
    setTimeout(() => userChoice_div.classList.remove("purple-glow"), 400);
}

function congrats() {
    if (computerScore === 5) {
        result_p.innerHTML = `Computer wins the match ${computerScore} to ${userScore}`;
        result_p.classList.add("red-font-glow");
    }
    if (userScore === 5) {
        result_p.innerHTML = `User wins the match ${userScore} to ${computerScore}`;
        result_p.classList.add("green-font-glow");
    } 
}

main();