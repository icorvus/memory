const animalsList = ['🦁', '🐶', '🦄', '🐷', '🐻', '🐼', '🦉', '🐸', '🦁', '🐶', '🦄', '🐷', '🐻', '🐼', '🦉', '🐸']
let animalsShown = [];

const checkPair = () => {
    if (animalsShown[0].textContent === animalsShown[1].textContent) return true;
    return false;
};

const checkWin = () => {
    const tiles = document.querySelectorAll('.tile');
    let win = true;
    tiles.forEach(tile => {
        if (!tile.classList.contains('disabled')) win = false;
    })
    return win;
}

const showWinText = () => {
    const info = document.querySelector('.info');
    info.textContent = "You won! Click reset to play again.";
}

const tileClick = event => {
    if (animalsShown.length === 2){
        animalsShown[0].classList.remove('disabled');
        animalsShown[1].classList.remove('disabled');
        if (checkPair()){
            animalsShown[0].classList.add('disabled');
            animalsShown[1].classList.add('disabled');
        } else {
            animalsShown[0].classList.add('hidden');
            animalsShown[1].classList.add('hidden');
        }
        animalsShown = [];
    } else {
        event.target.classList.remove('hidden');
        event.target.classList.add('disabled')
        animalsShown.push(event.target);
        if (animalsShown.length === 2 && checkPair()){
            animalsShown[0].classList.add('disabled');
            animalsShown[1].classList.add('disabled');
            animalsShown = [];
        }
    }
    console.log(checkWin())
    if (checkWin()) showWinText();
}

const fillBoard = () => {
    const board = document.querySelector('.tile-container');
    board.textContent = '';
    for (let i = 0; i < 16; i++) {
        const animal = document.createElement('div');
        animal.addEventListener('click', tileClick);
        animal.classList.add('tile');
        animal.classList.add('hidden');
        const animalIndex = Math.floor(Math.random() * animalsList.length)
        animal.textContent = animalsList[animalIndex];
        board.appendChild(animal);
        animalsList.splice(animalIndex, 1);
    }
}

const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', () => window.location.reload());

fillBoard();