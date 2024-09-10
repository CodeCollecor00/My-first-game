let userScore = 0;
let comScore = 0;
const userScorePara = document.querySelector('#user-score');
const comScorePara = document.querySelector('#comp-score');
const messg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
let body = document.querySelector("body");

/* This is our function for accessing images from choices div and applaying
click funtion on it which is that, when user click on any image it will take
it's Id */
choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });    
/* This our main fuction in which we call almost all our functions by which we will make our game as a playable this is our main function*/
    const playGame = (userChoice) =>{
    console.log("user choice =",userChoice);
    const compChoice = genCompChoice();
    console.log("Computer choice =" ,compChoice);
    if (userChoice === compChoice){
        drawGame(userChoice);
    } else {
        let userWin = true;
        if(userChoice  === 'Stone'){
            userWin = compChoice === 'Paper' ? false : true;
        } else if ( userChoice === 'Paper'){
            userWin = compChoice === 'Rock' ? true : false;
        } else if ( userChoice === 'Scissors'){
            userWin = compChoice === 'Rock' ? false : true ;
        }
        showWinner(userWin,userChoice,compChoice)
    }
}
/* This is function for generating computer's choice and we take a random number and use it as arry index in this function*/
const genCompChoice = () => {
    const options = ['Stone','Paper','Scissors'];
    const ranIdx = Math.floor(Math.random()*3);
    return options[ranIdx];
}    
/* This is our function for shoing winer and creating score borad and we will call it in the playgame function */
 const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        messg.innerText = `Congratulations! Your ${userChoice} beat ${compChoice}`;
        messg.style.backgroundColor = 'green';
        messg.style.border = '4px solid white';
    } else{
        comScore++;
        comScorePara.innerText = comScore;
        messg.innerText = `You loss...! ${compChoice}  beat your ${userChoice}`
        messg.style.backgroundColor = 'red';
        messg.style.border = '4px solid white';
    }
 }
}); 
/* This is our function which works when user's choice and computer's choice become equal and it show a draw game message and we also call it in the palygame function*/   
const drawGame = (userChoice) =>{
    console.log("Game has draw");
    messg.innerText = `Draw...! you and computer select ${userChoice}`;
    messg.style.backgroundColor = 'gray';
    messg.style.border = '4px solid white';
}    


