let but = document.querySelector('#button')
let wrt = document.querySelector('#balance')
let cou = document.querySelector('#counter')

let value = 0;
let counter = 0;
let valuemoney = 0.1
let valuecounter = 1
//AUDIOS
const audioTap = new Audio('audios/money.mp3');

but.addEventListener('click', function(){
    counter += valuecounter
    value += valuemoney
    //Audio
    audioTap.currentTime = 0;
    audioTap.play();
    //Write to display
    cou.innerHTML = counter;
    wrt.innerHTML = `$${value.toFixed(2)}`;
});