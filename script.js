let gameOver = false;
let roundScore = 0;



const welcomeDiceMsg = document.getElementById("welcomeDiceMsg"); 
const totalScore = document.getElementById("totalScore"); 
const roll = document.getElementById("roll"); 
const resetBtn = document.getElementById("resetBtn") 

roll.addEventListener('click', () => {
    let dice1 = Math.floor(Math.random() * 6) + 1;
    welcomeDiceMsg.src = `./diceimages2/${dice1}.gif`;

    if(!gameOver){
        if (dice1 == 1) {
            roundScore = 0;
            // For lose;
            totalScore.innerHTML = 'Game Over! YOU LOSE!:(';
            gameOver = true;
            // roll.disabled = true;
        } else{
            roundScore += dice1;
            totalScore.innerHTML = 'Total Score : ' + roundScore;
            if (roundScore >= 20) {
                // For win;
                totalScore.innerHTML = 'YOU WIN!!';
                gameOver = true;
                // roll.disabled = true;
            }
        }
    }
});

// Reset Button
resetBtn.addEventListener('click', () => {
    roundScore = 0;
    totalScore.innerHTML = 'Total Score : ';
    welcomeDiceMsg.src = 'rollthedice.gif';
    // roll.disabled = false;
    roll.restart();
})