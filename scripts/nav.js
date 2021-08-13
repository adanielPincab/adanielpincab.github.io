const nav = document.getElementsByTagName('nav')[0];

window.onscroll = function () {  
    if (window.pageYOffset/window.innerHeight > 0.5){
        nav.style.opacity = 1;
    } else {
        nav.style.opacity = 0;
    } 
} 