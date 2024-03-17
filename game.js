const sEL0 = document.querySelector('#score--0');

const sEL1 = document.querySelector('#score--1');

const dEL = document.querySelector('.dice');

const newBtn = document.querySelector('.btn--new');

const rollBtn = document.querySelector('.btn--roll');

const holdBtn = document.querySelector('.btn--hold');

const currentEL0 = document.getElementById('current--0');
const currentEL1 = document.getElementById('current--1');

const playerEL0 = document.querySelector('.player--0');
const playerEL1 = document.querySelector('.player--1');


//let currentScore = 0;


sEL0.textContent= 0;

sEL1.textContent= 0;


dEL.classList.add('hidden');


const score = [0,0];

let currentScore= 0;

let activePlayer = 0;

const playerSwitch = function(){
	
		document.getElementById(`current--${activePlayer}`).textContent = 0;

		activePlayer = activePlayer === 0 ? 1 : 0;
		
		currentScore = 0;
		
		playerEL0.classList.toggle('player--active');
		
		playerEL1.classList.toggle('player--active');
	
	
};



rollBtn.addEventListener('click', function() {
	
	const dice = Math.trunc(Math.random()*6)+1;
//	console.log(dice);
	
	dEL.classList.remove('hidden');
	dEL.src = `dice-${dice}.png`;
	
	
	
	if(dice !== 1){
		currentScore += dice;
		
		document.getElementById(`current--${activePlayer}`).textContent = currentScore;
		
	//	currentEL0.textContent = currentScore;
	}
	else {
		

playerSwitch();		
	}
});




holdBtn.addEventListener('click', function() {
	
	score[activePlayer] += currentScore;
	
		console.log('hold button');

	document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
	
	if(score[activePlayer]== 20){
		
		document.querySelector('.player--${activePlayer}').classList.add('player--winner');
		
		document.querySelector('.player--${activePlayer}').classList.remove('player--active');

	}else{
	
	playerSwitch();		

	}
});