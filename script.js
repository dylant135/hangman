//              start game function
const newGamebtn = document.getElementById('createBtn');
const form = document.getElementById('wordForm');

//pop up form
newGamebtn.addEventListener('click', newGame);
function newGame() {
    form.style.display = 'block';
    newGamebtn.style.display = 'none';
}

//get word and start game
const theWord = document.getElementById('word');
const startBtn = document.getElementById('submit');
const buttonsContainer = document.getElementById('buttonsContainer');
const hangman = document.getElementById('hangman');

let word = '';

startBtn.addEventListener('click', startGame);
function startGame() {
    if(theWord.value == '') {
        alert('Enter a word');
        return;
    } else {
        word = theWord.value;
        word = word.toUpperCase();
    }
    buttonsContainer.style.display = 'flex';
    form.style.display = 'none';
    hangman.style.display = 'block';
    const hint = document.getElementById('hint');
    const hintDisplay = document.getElementById('hintDisplay');
    if(hint.value != '') {
        hintDisplay.innerHTML = 'Hint: ' + hint.value;
    }

    displayWord();
}


const wordDisplay = document.getElementById('wordDisplay');
let wordArr = [];
function displayWord() {
    const leng = word.length;
    for(let i = 0; leng > i; i++) {
         wordArr.push('_');
    }
    let realword = wordArr.join(' ');
    wordDisplay.innerHTML = realword;
    display.innerText += 'Selet a letter';
}

//making a guess
const choisebtn = document.querySelectorAll('.choisebtn');

choisebtn.forEach(btn => {
    btn.addEventListener('click', makeGuess);
})
function makeGuess(e) {
    const item = e.target;
    let letter = item.innerText;
    letter = letter.toUpperCase();
    for(let i = 0; i < word.length; i++) {
        if(letter == word[i]) {
            wordArr[i] = letter;
            let realword = wordArr.join(' ');
            wordDisplay.innerHTML = realword;
            item.style.background = 'grey';
            item.disabled = true;
            checkWinner();
        } else {
            item.style.background = 'grey';
            item.disabled = true;
        }
    }
    if(word.includes(letter)) {
        return;
    }
    mistake();
}

function checkWinner() {
    let wordg = wordArr.join('');
    if(word == wordg) {
        alert('You win the game');
        location.reload();
    }
}

const display = document.getElementById('displayText');
//wrong guess
const hangimg = document.getElementById('hangimg');
let mistakes = 0;
function mistake() {
    mistakes = mistakes + 1;
    if(mistakes >= 6) {
        alert('You lose the game. The word was ' + word);
        location.reload();
    }

    display.innerHTML = 'Mistakes: ' + mistakes
    hangimg.src = 'hangman' + mistakes + '.jpeg';
    return;
}