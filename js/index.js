// 1

function hKey(event){
    if (event.key === 'h'){
        alert('HAPPY BIRTHDAY!!!!!!!');
    }
}

document.addEventListener('keydown', hKey);

// 2

const funBus = document.querySelector('.logo-heading');

funBus.addEventListener('mouseover', event => {
    funBus.style.fontSize = '60px';
    funBus.style.color = 'red';
})

// funBus.addEventListener('mouseleave', function(event){
//     funBus.style.fontSize = '32px';
//     funBus.style.color = 'black';
// })

// 3

document.querySelector('.intro h2').addEventListener("wheel", myFunction);

function myFunction() {
  this.style.fontSize = "50px";
}

// 4

const busPic = document.querySelector('.intro img');

busPic.addEventListener('dblclick', function(event){
    this.style.border = '2px solid black';
})

// 5

const signMeUp = document.querySelector('.content-pick');

signMeUp.addEventListener('mouseover', function(event){
    this.style.color = 'red';
})

signMeUp.addEventListener('mouseleave', function(event){
    this.style.color = 'black';
})

// 6

window.addEventListener('resize', event => {
    alert('You changed my size!!')
})

// 7

const test = document.querySelector('.content-section');

test.addEventListener('mousemove', event => {
    test.style.backgroundColor = 'lightBlue';
})

// 8

const fooTer = document.querySelector('.footer p');

fooTer.addEventListener('mousedown', event => {
    console.log('You clicked the footer!!');
})

// 9
// Z
const zItemDown = document.querySelector('.intro');

function zKeyDown(event){
    if (event.key === 'z'){
        zItemDown.style.fontSize = '35px';
    }
}

document.addEventListener('keydown', zKeyDown);

const zItemUp = document.querySelector('.intro');

function zKeyUp(event){
    if (event.key === 'z'){
        zItemUp.style.fontSize = '20px';
    }
}

document.addEventListener('keyup', zKeyUp);

// X

const xItemDown = document.querySelector('.text-content');

function xKeyDown(event){
    if (event.key === 'x'){
        xItemDown.style.fontSize = '70px';
    }
}

document.addEventListener('keydown', xKeyDown);

const xItemUp = document.querySelector('.text-content');

function xKeyUp(event){
    if (event.key === 'x'){
        xItemUp.style.fontSize = '25px';
    }
}

document.addEventListener('keyup', xKeyUp);

// C

const cItemDown = document.querySelector('.content-destination');

function cKeyDown(event){
    if (event.key === 'c'){
        cItemDown.style.fontSize = '50px';
    }
}

document.addEventListener('keydown', cKeyDown);

const cItemUp = document.querySelector('.content-destination');

function cKeyUp(event){
    if (event.key === 'c'){
        cItemUp.style.fontSize = '25px';
    }
}

document.addEventListener('keyup', cKeyUp);

// V

const vItemDown = document.querySelector('footer');

function vKeyDown(event){
    if (event.key === 'v'){
        vItemDown.style.fontSize = '80px';
    }
}

document.addEventListener('keydown', vKeyDown);

const vItemUp = document.querySelector('footer');

function vKeyUp(event){
    if (event.key === 'v'){
        vItemUp.style.fontSize = '20px';
    }
}

document.addEventListener('keyup', vKeyUp);

// 10

window.addEventListener('load', event => {
    console.log('Window was just loaded!!!')
})


// Propagation

