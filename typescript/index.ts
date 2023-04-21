const player = document.getElementById('player') as HTMLDivElement;

window.addEventListener("keypress", (event) => {

    if (event.key == 'w')
        console.log('forward');
    else if (event.key == 's') {
        console.log('backward');
        player.style.left = player.offsetLeft + 2 + "px";
    }
    else if (event.key == 'a')
        console.log('right');
    else if (event.key == 'd')
        console.log('left');
});