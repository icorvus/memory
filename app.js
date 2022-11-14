const animals = {
    lion: '🦁',
    dog: '🐶',
    unicorn: '🦄',
    pig: '🐷',
    bear: '🐻',
    panda: '🐼',
    owl: '🦉',
    frog: '🐸',
}

const animalsList = ['🦁', '🐶', '🦄', '🐷', '🐻', '🐼', '🦉', '🐸', '🦁', '🐶', '🦄', '🐷', '🐻', '🐼', '🦉', '🐸']
let animalsShown = [];

const checkPair = () => {
    if (animalsShown[0].textContent === animalsShown[1].textContent) return true;
    return false;
};

const tileClick = event => {
    if (animalsShown.length === 2){
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
        animalsShown.push(event.target);
        if (checkPair()){
            animalsShown[0].classList.add('disabled');
            animalsShown[1].classList.add('disabled');
            animalsShown = [];
        }
    }
}

const fillBoard = () => {
    const board = document.querySelector('.tile-container');
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

fillBoard();