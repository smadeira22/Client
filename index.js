let count = 0;

const correctA = document.querySelector('#correct-a');
const correctB = document.querySelector('#correct-b');
const correctC = document.querySelector('#correct-c');
const correctD = document.querySelector('#correct-d');
const correctE = document.querySelector('#correct-e');
const correctF = document.querySelector('#correct-f');
const correctG = document.querySelector('#correct-g');
const correctH = document.querySelector('#correct-h');
const correctI = document.querySelector('#correct-i');
const correctJ = document.querySelector('#correct-j');
const correctK = document.querySelector('#correct-k');
const correctL = document.querySelector('#correct-l');
const correctM = document.querySelector('#correct-m');
const correctN = document.querySelector('#correct-n');
const correctO = document.querySelector('#correct-o');
const correctP = document.querySelector('#correct-p');
const correctQ = document.querySelector('#correct-q');
const correctR = document.querySelector('#correct-r');

const correctAns = [correctA, correctB, correctC, correctD, correctE, correctF, correctG, correctH, correctI, correctJ, correctK, correctL, correctM, correctN, correctO, correctP, correctQ, correctR];

correctAns.forEach(option => {
    option.addEventListener('click', function(e) {
        e.target.disabled = true;   //Prevents double-clicking
        count++;
        const result = document.querySelector('.result');
        result.innerText = `Your score is: ${count} out of 18`;
    })
})





