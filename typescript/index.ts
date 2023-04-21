const movementOffset: number = 2;

const player = document.getElementById('player') as HTMLDivElement;
const gameContainer = document.getElementById('game-container') as HTMLElement;
const topMachinesContainer = document.getElementsByClassName('top-machine-container') as HTMLCollectionOf<HTMLDivElement>;

for (let idx = 0; idx < topMachinesContainer.length; idx++) {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const topMachine = topMachinesContainer[idx].children[0] as HTMLDivElement;
    topMachine.style.backgroundColor = `#${randomColor}`;

    let rising = (Math.random() >= 0.5);
    // let rising = true;
    const amplitude = topMachine.offsetHeight;
    // determines initial random position
    const phase = Math.floor(Math.random() * amplitude)
    const samplingPerSecond = 200
    let displacement = -phase;
    topMachine.style.top = displacement + 'px'
    setInterval(() => {
        if (rising) {
            // rising is false
            displacement -= 1;
            if (displacement <= -amplitude) {
                rising = false;
            }
        } else {
            // rising is true
            displacement += 1;
            if (displacement >= 0) {
                rising = true;
            }
        }
        topMachine.style.top = displacement + 'px';
    }, 1000 / samplingPerSecond);
}



window.addEventListener("keypress", (event) => {
    const bodyRect = gameContainer.getBoundingClientRect()
    const playerRect = player.getBoundingClientRect();

    if (event.key == 'w' && playerRect.top > movementOffset) {
        player.style.top = (player.offsetTop - movementOffset) + "px";
    } else if (event.key == 's' && bodyRect.bottom > playerRect.bottom + movementOffset) {
        player.style.top = (player.offsetTop + movementOffset) + "px";
    } else if (event.key == 'a' && playerRect.left > movementOffset) {
        player.style.left = (player.offsetLeft - movementOffset) + "px";
    } else if (event.key == 'd' && bodyRect.right > playerRect.right + movementOffset) {
        player.style.left = (player.offsetLeft + movementOffset) + "px";
    }
});