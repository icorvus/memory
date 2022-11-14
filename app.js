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


const tileClick = event => {
    event.target.classList.toggle('hidden');
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