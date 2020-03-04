const tmpGreenNormal = 4000;
const tmpGreenCall = 500;
let tmpGreen =tmpGreenNormal;

let call;

const tmpOrange = 1000;

const tmpRed =  4000;

const fireGreen = document.getElementById('green');
const fireOrange = document.getElementById('orange');
const fireRed = document.getElementById('red');

function turnOn(fire, color){
    fire.style.backgroundColor=color;
    colorActive=color;
}

function turnOff(fire){
    fire.style.backgroundColor='white';
}

function pedestrianCall(){
    if (colorActive!='green'){
        tmpGreen=tmpGreenCall;
    }else if (colorActive=='green'){
        setTimeout(function(){
            clearTimeout(call);
            turnOn(fireOrange,'orange');
            turnOff(fireGreen);
            setTimeout(function(){
                turnOn(fireRed,'red');
                turnOff(fireOrange);
                tmpGreen=tmpGreenNormal;
            },tmpOrange);
        },tmpGreenCall);
    }
    
}  

function gestionFeu(){
    setTimeout(function(){
        turnOn(fireGreen,'green');
        turnOff(fireRed);
        call=setTimeout(function(){
            turnOn(fireOrange,'orange');
            turnOff(fireGreen);
            setTimeout(function(){
                turnOn(fireRed,'red');
                turnOff(fireOrange);
                tmpGreen=tmpGreenNormal;
            },tmpOrange);
        },tmpGreen);
    },tmpRed);
}

function runFire(){
    turnOn(fireRed,'red');
    gestionFeu();
    setInterval(function(){gestionFeu();},tmpRed+tmpGreen+tmpOrange);
}
