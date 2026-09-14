let userScore=0;
let computerScore=0;
let computer_choice="";
let isGameOver=false;

const play_content=document.querySelector(".hidden");
const comp_choice_display=document.querySelector(".computer-choice");
const winnerDisplay=document.querySelector(".winner");
const userScoreDisplay=document.querySelector("#user");
const computerScoreDisplay=document.querySelector("#computer");

const rockBtn=document.querySelector(".rock");
const paperBtn=document.querySelector(".paper");
const scissorBtn=document.querySelector(".scissor");
const playBtn=document.querySelector("#btn");

play_content.style.display="none";

function play(){

    if(isGameOver){
        userScore=0;
        computerScore=0;
        userScoreDisplay.textContent=userScore;
        computerScoreDisplay.textContent=computerScore;
        isGameOver=false;
    }

    let choice_arr=['Rock','Paper','Scissor'];
    computer_choice=choice_arr[Math.floor(Math.random()*3)];

    play_content.style.display="block";
    winnerDisplay.textContent="";
    comp_choice_display.textContent="";
}
function playRound(userChoice){
    play_content.style.display="none";
    comp_choice_display.textContent="Computer choice: "+computer_choice;

    if(userChoice===computer_choice){
        winnerDisplay.textContent="Round Tie!";
    } else if((userChoice==='Rock' && computer_choice==='Scissor') || (userChoice==='Paper' && computer_choice==='Rock') || (userChoice==='Scissor' && computer_choice==='Paper')){
        userScore++;
        winnerDisplay.textContent="You won this round!";
    } else {
        computerScore++;
        winnerDisplay.textContent="Computer won this round!";
    }

    userScoreDisplay.textContent=userScore;
    computerScoreDisplay.textContent=computerScore;

    if(userScore===5){
        winnerDisplay.textContent="User wins the game!";
        isGameOver=true;
    } else if(computerScore===5){
        winnerDisplay.textContent="Computer wins the game!";
        isGameOver=true;
    }
}
playBtn.addEventListener("click",play);

rockBtn.addEventListener('click',() => playRound('Rock'));
paperBtn.addEventListener('click',() => playRound('Paper'));
scissorBtn.addEventListener('click',() => playRound('Scissor'));