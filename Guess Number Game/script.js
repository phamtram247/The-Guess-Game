let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget()
{
    return Math.round(Math.random() * 8);
}
console.log(generateTarget());
function compareGuesses(currentHumanGuess, computerGuess, target)
{
    target = generateTarget();
    player1 = Math.abs(currentHumanGuess - target);
    player2 = Math.abs(computerGuess - target);
    if (player1 > player2) {
        return false;
    } else if (player1 < player2) {
        return true;
    } else {
        return true;
    }
}
function updateScore(winner) 
{
    if (winner === 'human')
    {
        humanScore++;
    } else if (winner === 'computer')
    {
        computerScore++;
    }
}
function advanceRound()
{
    currentRoundNumber++;
}