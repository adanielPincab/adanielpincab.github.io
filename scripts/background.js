const bg = document.getElementsByClassName('background')[0];
for ( bubble of bg.children ) {
    let pos = (-22 + Math.random() *44).toString() + 'vw ' + (-22 + Math.random() *44).toString() + 'vh';
    bubble.style.transformOrigin = pos;
}