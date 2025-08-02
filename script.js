let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, loses: 0, ties: 0 };

updateScore();

let result = '';
function playgame(playermove) {
    const mover = computerpick();

    if (playermove === 'rock') {
        if (mover === 'rock') result = 'Tie';
        else if (mover === 'paper') result = 'You Lose';
        else if (mover === 'scissor') result = 'You Won';
    } else if (playermove === 'paper') {
        if (mover === 'rock') result = 'You Won';
        else if (mover === 'paper') result = 'Tie';
        else if (mover === 'scissor') result = 'You Lose';
    } else if (playermove === 'scissor') {
        if (mover === 'rock') result = 'You Lose';
        else if (mover === 'paper') result = 'You Won';
        else if (mover === 'scissor') result = 'Tie';
    }

    if (result === 'You Won') {
        score.wins += 1;
    } else if (result === 'You Lose') {
        score.loses += 1;
    } else if (result === 'Tie') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScore();

    document.querySelector('.js-result').innerHTML = `Match result -- ${result}`;
    document.querySelector('.js-moves').innerHTML = `You selected <img src="${playermove}-emoji.png" class="move-icon"> Computer selected <img src="${mover}-emoji.png" class="move-icon">`;
}

function computerpick() {
    const rand = Math.random();
    let move = '';

    if (rand >= 0 && rand < 1 / 3) {
        move = 'rock';
    } else if (rand >= 1 / 3 && rand < 2 / 3) {
        move = 'paper';
    } else if (rand >= 2 / 3 && rand < 1) {
        move = 'scissor';
    }
    return move;
}

function reset() {
    score.wins = 0;
    score.loses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScore();
    document.querySelector('.js-result').innerHTML = '';
    document.querySelector('.js-moves').innerHTML = '';
}

function updateScore() {
    document.querySelector('.js-score').innerHTML = `Wins : ${score.wins}, Loses : ${score.loses}, Ties : ${score.ties}`;
}

