
let but = document.querySelector('#button')
let wrt = document.querySelector('#balance')
let cou = document.querySelector('#counter')

let value = 0;
let counter = 0;


//AUDIOS
const audioTap = new Audio('audios/money.mp3');

but.addEventListener('click', click)

function click(){
    counter += 1
    value += 0.1
    audioTap.currentTime = 0;
    audioTap.play();
    cou.innerHTML = counter
    wrt.innerHTML = `$${value.toFixed(2)}`;
}


let money = document.querySelector('#money')
let clicker = document.querySelector('#click')
function toggleMenu(){
    const menu = document.getElementById('upgrade-menu');
    menu.classList.toggle('open');
    money.innerHTML = `$${value.toFixed(2)}`; 
    clicker.innerHTML = counter
}

