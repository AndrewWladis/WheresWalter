const rv = document.getElementById('rv');
const walter = document.getElementById('walter');
const object = document.createElement('div');
let isGameOver = true;
let score;

function jump() {
    if (!isGameOver) {
        walter.classList.add('jump');
    }
    setTimeout(
        function() {
            walter.classList.remove('jump');
        }, 750);
}

function createObject() {
    object.classList.add('.object')
    document.body.appendChild(object)
}

function start() {
    isGameOver = false;
    score = 0;
    rv.style.animation = "slideout 1s";
    setTimeout(
        function() {
            rv.style.opacity = "0%";
            walter.classList.add("movealittle");
        }, 1000);
    setTimeout(
        function() {
            walter.style.marginLeft = "475px";
            walter.classList.remove("movealittle");
        }, 1250);
}





document.addEventListener('keydown', jump)

document.onclick = function(){
    if (isGameOver) {
        start();
    }
}

setInterval(function () {
    if (!isGameOver) {
        createObject();
    }
}, 7500);

setInterval(function () {
    if (!isGameOver) {
        score++
    }
}, 2000);