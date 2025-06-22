const playerOne = document.querySelector('#playerOne')
const playerTwo = document.querySelector('#playerTwo')
const reset = document.querySelector('#reset')
const maxScore = document.querySelector('.maxScore')
const p1Span = document.querySelector('#p1Score')
const p2Span = document.querySelector('#p2Score')

function checkResult(){
	const max = parseInt(maxScore.value);
	const p1 = parseInt(p1Span.innerText);
	const p2 = parseInt(p2Span.innerText);

	if (p1 === max || p2 === max){
		playerOne.disabled = true;
		playerTwo.disabled = true;
		playerOne.classList.add('disabled');
		playerTwo.classList.add('disabled');

		if (p1 === max){
			p1Span.classList.add('win');
			p2Span.classList.add('lose')
		}else {
			p2Span.classList.add('win')
			p1Span.classList.add('lose')
		}
	}
}

function addScore(pSpan){
	let playerScore = parseInt(pSpan.innerText);
	playerScore += 1;
	pSpan.innerText = playerScore;
}

playerOne.addEventListener('click', () =>{
	addScore(p1Span)
	checkResult();
})

playerTwo.addEventListener('click', () =>{
	addScore(p2Span)
	checkResult();
})


reset.addEventListener('click', () =>{
	p1Span.innerText = '0';
	p2Span.innerText = '0';

	p1Span.classList.remove('win', 'lose')
	p2Span.classList.remove('win', 'lose')

	playerOne.classList.remove('disabled')
	playerOne.disabled = false;
	playerTwo.classList.remove('disabled')
	playerTwo.disabled = false;
})