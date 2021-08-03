// 1

function hKey(event){
    if (event.key === 'h'){
        alert('HAPPY BIRTHDAY!!!!!!!');
    }
}

document.addEventListener('keydown', hKey);

// 2

const funBus = document.querySelector('.logo-heading');

funBus.addEventListener('mouseover', function(event){
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
    busPic.style.border = '2px solid black';
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

window.addEventListener('resize', function(event){
    alert('You changed my size!!')
})