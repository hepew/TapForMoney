let money = document.querySelector('#money')
let clicker = document.querySelector('#click')
//toggle to menu
function toggleMenu(){
    const menu = document.querySelector('#upgradeMenu');
    menu.classList.toggle('open');
    money.innerHTML = `$${value.toFixed(2)}`; 
    clicker.innerHTML = counter
}
//UPGRADE 1
let mn1 = document.querySelector('#money1')
let up2 = document.querySelector('#up2')
let pr1 = 3.00;
mn1.addEventListener('click', function(){
    if(value >= pr1){
        value -= pr1;
        valuemoney = 0.20
        wrt.innerHTML = `$${value.toFixed(2)}`
        mn1.innerHTML = `OWNED`
        mn1.style.background= 'rgb(191, 11, 11)'
        mn1.style.cursor = 'default'
        
        up2.classList.remove('hidden');
    }else{
        mn1.innerHTML = `Without money`
    setTimeout(() =>{
            mn1.innerHTML = `PURCHASE`
        }, 1000); 
    }
}); 

let mn2 = document.querySelector('#money2')
let pr2 = 30.00;
mn2.addEventListener('click', function(){
    if(value >= pr2){
        value -= pr2;
        valuemoney = 0.50
        wrt.innerHTML = `$${value.toFixed(2)}`
        mn2.innerHTML = `OWNED`
        mn2.style.background= 'rgb(191, 11, 11)'
        mn2.style.cursor = 'default'
    }else{
        mn2.innerHTML = `Without money`
    setTimeout(() =>{
            mn2.innerHTML = `PURCHASE`
        }, 1000); 
    }
}); 