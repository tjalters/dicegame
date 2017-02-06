"use strict";


function playerDice (){
	var die1 = Math.floor(Math.random()*4 + 1);						//Start Game
	var die2 = Math.floor(Math.random()*6 + 1);						//randomize the dice
	var die3 = Math.floor(Math.random()*8 + 1);						//Start the round (player 1 rolls, followed by player 2)
	var dieNumber = [die1, die2, die3];								//Add up the 3 dice after each player roll; make sure to eliminate the 4's since 4's = 0
	return dieNumber;												//Sum of the 3 dice = total score for the round
}																	//Alternate turns until one player hits a score of 100 or greater. That player is the winner of the game

function playRound(){
	var player1Roll = 0
	var player2Roll = 0
	var playerOneScore = 0;
	var playerTwoScore = 0;
	while(playerOneScore < 100 || playerTwoScore < 100){
		
		 playerOneScore = checkWinner();
		 playerTwoScore = checkWinner();
		var player1Dice = playerDice();
		var player2Dice = playerDice();
		var player1Roll = checkForFour(player1Dice);
		var player2Roll = checkForFour(player2Dice);
		//functionality to add dice up, remember to take in if any are 0
		if(player1Roll > player2Roll) {
			alert("player1Roll");
		}
	}
}

function checkForFour(playerDice){
	for(var i = 0; i < playerDice.length; i++){
		if(playerDice[i] === 4){
			playerDice[i] = 0;
		}
	}
	return playerDice;
}

function playerDiceSum(playerDice){
    var total = 0;
    var dieNumber = [die1, die2, die3];
    len = playerDice.length;

    for (var i = 0; i < len; i++){
    total += dieNumber[i];
    }
    return total;
}

function checkWinner (playerDiceSum, winningScore) {
	var playerOneTotal = playerDice(playerDiceSum);
	var playerTwoTotal = playerDice(playerDiceSum);
	var playerOneScore = 0
	var playerTwoScore = 0
	var winningScore = (playerOneTotal < 100 || playerTwoTotal < 100);
	var total = 0;
	for (var i=1; i <= playerDiceSum; i++){
total += playerDiceSum[i];
	}
		if(total[i] >= winningScore){
	    alert("Player 1 wins the game!!")
		}
		else if(total[i] >= winningScore){
		alert("Player 2 wins the game!!")
		}
	
}

function runGame(){
	var playGame = startGame();
	console.log(playGame);
	var dieRolled = playerDice();
	console.log(dieRolled);
	var rollDice = playRound();
	console.log(rollDice);
	var checkFour = checkForFour(playerDice);
	console.log(checkFour);
	var addDie = playerDiceSum(playerDice);
	console.log(addDie);
	checkWinner(sumOfDie, player1, player2)
}
function startGame (){
	playRound();
}
//startGame();
playRound();

