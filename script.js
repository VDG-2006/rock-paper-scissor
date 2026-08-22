
let userScore=0;
let computerScore=0;
let play=function(){
    let userChoice=prompt("Enter rock,paper,scissor:").toLowerCase().trim();
    let computerChoices=['rock','paper','scissor']
    let computerChoice=Math.floor(Math.random()*3);
    console.log(userChoice+" "+computerChoices[computerChoice]);
    if(computerChoice===0){
        if(userChoice==='paper') computerScore++;
        else if(userChoice==='scissor') userScore++;
    } else if(computerChoice===1){
        if(userChoice==='rock') computerScore++;
        else if(userChoice==='scissor') userScore++;
    } else {
        if(userChoice==='paper') computerScore++;
        else if(userChoice==='rock') userScore++;
    }
    document.getElementById("user").textContent=userScore;
    document.getElementById("computer").textContent=computerScore;
}
document.getElementById("btn").addEventListener("click",play);