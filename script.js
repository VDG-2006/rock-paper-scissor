let userScore=0;
let computerScore=0;

const play_content=document.querySelector(".hidden");
play_content.style.display="none";

let play=function(){
    let choice_arr=['Rock','Paper','Scissor'];
    let computer_choice=choice_arr[Math.floor(Math.random()*3)];

    play_content.style.display="block";

    const rock_btn=document.querySelector(".rock");
    const paper_btn=document.querySelector(".paper");
    const scissor_btn=document.querySelector(".scissor");

    function updateInfo(){
        document.querySelector(".computer-choice").textContent="Computer Choice: "+computer_choice;

        document.querySelector("#user").textContent=userScore;
        document.querySelector("#computer").textContent=computerScore;

        play_content.style.display="none";
    }

    rock_btn.onclick=  ()=>{
        if(computer_choice==='Paper'){
            computerScore++;
        } else if(computer_choice==='Scissor') {
            userScore++;
        }
        updateInfo();
    };

    paper_btn.onclick=  ()=>{
        if(computer_choice==='Scissor'){
            computerScore++;
        } else if(computer_choice==='Rock') {
            userScore++;
        }
        updateInfo();
    };

    scissor_btn.onclick=  ()=>{
        if(computer_choice==='Rock'){
            computerScore++;
        } else if(computer_choice==='Paper') {
            userScore++;
        }
        updateInfo();
    };

}
document.getElementById("btn").addEventListener("click",play);