const player=document.getElementsByClassName('player');
console.log(player[0]);

window.addEventListener("keypress", (event) => {
    if (event.isComposing || event.keyCode === 229) {
      return;
    }
    console.log(event);
    if(event.key=='w')
    console.log('forward');
    else if(event.key=='s')
    {
        console.log('backward');
        player[0].style.left = player[0].offsetLeft + 100 + "px";
    }
    else if(event.key=='a')
    console.log('right');
    else if(event.key=='d')
    console.log('left');
  });