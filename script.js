// Storing all the necessary Variables
let playerPoints = 0
let computerPoints = 0
const userName = document.getElementById("playerName")
const playerScore = document.getElementById("playerScore").childNodes[0]
const computerScore = document.getElementById("computerScore").childNodes[0]
const result = document.getElementById("result")
const choice = document.querySelectorAll(".options")

// Generating a prompt message to get user name
setTimeout(() => {
    const playerName = prompt("What is your name?")
    userName.innerHTML = playerName
}, 3000);



// Function to reset the score after Game is over
const resetScore=()=>{
    alert("Do you want to reset")
    playerPoints = 0
    computerPoints = 0
    playerScore.nodeValue = playerPoints
    computerScore.nodeValue = computerPoints
    result.innerHTML = "Let's Play"
    
}

// Function to Check the score of the player
const matchScoreChecker =(playerPoints,computerPoints)=>{

    if(playerPoints ==5){
        playerScore.nodeValue = "Won"
        
        
        setTimeout(() => {
            resetScore()
        }, 2000);
    }if(computerPoints==5){
        computerScore.nodeValue = "Won"
        
        setTimeout(() => {
            resetScore()
        }, 2000);
    }
}

// Function for DOM for Draw Game
const drawGame=()=>{
    result.innerHTML = "Draw"
}

// Function for DOM for user or comp win Game
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        
        result.innerHTML = `Your ${userChoice} beats Computer's ${compChoice}`
        playerPoints++
        playerScore.nodeValue = playerPoints
    }else{
        
        result.innerHTML = `Computer's ${compChoice} beats Your ${userChoice}`
        computerPoints++
        computerScore.nodeValue = computerPoints
    }
    


    matchScoreChecker(playerPoints,computerPoints)
}


// Function to GenComputer Choice using array and math.Random method
const genComputerChoice =()=>{
    const options = ["Rock","Paper","Scissor"];
    const random = Math.floor(Math.random() * options.length);
    return options[random]
}


// PlayGame Function
const PlayGame = (userChoice)=>{
    console.log("User choice = ", userChoice)
    const compChoice = genComputerChoice()
    console.log("Comp choice = ",compChoice)
    if(userChoice === compChoice){
        drawGame()
    }else{
        let userWin = true
        if(userChoice === 'Paper'){
            //Scissor, Rock
            userWin = compChoice === 'Rock' ? true : false
        }else if(userChoice === 'Rock'){
            //Scissor, Paper
            userWin = compChoice === 'Scissor' ? true : false
        }else if(userChoice === 'Scissor'){
            //Scissor, Paper
            userWin = compChoice === 'Paper' ? true : false
        }
        showWinner(userWin,userChoice,compChoice)
    }
}


// Loop to hower over elements
choice.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userChoice = choice.getAttribute("Id")

        PlayGame(userChoice)
    })
})






