let score = JSON.parse(localStorage.getItem('score')) ||{
  wins: 0, 
 losses: 0, 
 Tie: 0 
};

updateScoreElement(); 




/***************** 
play the game function 
************/
function playGame(playerMove){
const comp = pickCompMove(); 

let result = '';  
if(playerMove === 'scissors'){
if(comp === 'scissors'){
 result = 'Tie'; 
}
else if(comp === 'rock'){
 result = 'You Lose'; 
}
else if(comp === 'paper'){
 result = 'You Win';
}

} else if(playerMove === 'paper'){
if(comp === 'paper'){
result = 'Tie'; 
}
else if(comp === 'scissors'){
result = 'You Lose'; 
}
else if(comp === 'rock'){
result = 'You Win';
}

} else if(playerMove === 'rock'){
if(comp === 'rock'){
 result = 'Tie'; 
}
else if(comp === 'paper'){
 result = 'You Lose'; 
}
else if(comp === 'scissors'){
 result = 'You Win';
}
}

if(result === 'You Win'){
score.wins += 1;
} else if ( result === 'You Lose'){
score.losses += 1; 
} else if ( result === 'Tie'){
score.Tie += 1; 
}

localStorage.setItem('score', JSON.stringify(score)); 

document.querySelector('.js-result').innerHTML = result; 
document.querySelector('.js-moves').innerHTML = `You 
<img src="${playerMove}-emoji.png" alt="" class="move-icon"> <img src="./${comp}-emoji.png" alt="" class="move-icon"> Computer`;

updateScoreElement();

}




/***************** 
UpdateElement for the score
************/
function updateScoreElement() {
document.querySelector('.js-score')
.innerHTML = `Wins: ${score.wins}, Losses ${score.losses}, Ties: ${score.Tie}`;
}



/***************** 
computer picks a move
************/     
function pickCompMove(){

const randomNum = Math.random();
let comp= '';

if(randomNum >= 0 && randomNum < 1 / 3){
 comp = 'rock'; 
} 
else if(randomNum >= 1/3 && randomNum < 2/3){
 comp = 'paper'; 
}
else if(randomNum >= 2/3 && randomNum < 1){
 comp = 'scissors';  
}

return comp;
}