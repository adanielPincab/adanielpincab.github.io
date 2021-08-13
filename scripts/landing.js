function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

window.scroll({top:0})

myName = "Ángel Daniel Pinheiro";
const nameLogo = document.getElementById("name");
const subLogo = document.getElementById("subtitle");

const downLogo = document.getElementById("icon-angle-circled-down");
downLogo.style.visibility = 'hidden';

async function introAnimation() {
    for( let i = 1; i <= myName.length; i++) {
        nameLogo.innerHTML = myName.slice(0, i);
        if (i != myName.length){
            nameLogo.innerHTML += '_'
        } else {
            let cursor = document.createElement('b')
            cursor.innerText = '_'
            cursor.id = "cursor"
            nameLogo.appendChild(cursor)
        }  
        await sleep(90 * Math.random() + 50);
    }

    const cursorLogo = document.getElementById("cursor");

    for ( let i = 0; i < 3; i++ ){
        if (i%2 == 0){
            cursorLogo.style.visibility = "hidden";
        } else {
            cursorLogo.style.visibility = "initial";
        }
        await sleep(500);
    }
    subLogo.style.opacity = 1;
    await sleep(1000);
    downLogo.style.visibility = 'initial';
    downLogo.style.opacity = 1;
}

introAnimation();