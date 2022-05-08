// Link to HTML
var character = document.getElementById("character");
var block = document.getElementById("block");

// Global Variables
var counter = 0;
var speed = 2000;

function jump() {
    if (character.classList == "animate") { return }

    character.classList.add("animate");
    setTimeout(function () {
        character.classList.remove("animate");
    }, 300);
}

var checkDead = setInterval(function () {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if (blockLeft < 20 && blockLeft > -20 && characterTop >= 132) {
        block.style.animation = "none";
        alert("Game Over. score: " + counter);
        counter = 0;
        block.style.animation = "block 2000ms infinite linear;"
        location.reload();
    } else {
        counter++;
        document.getElementById("scoreSpan").innerHTML = counter;
        block.style.animation = `block ${speed}ms infinite linear;`
    }
}, 50);


var changeSpeed = setInterval(function () {
    speed = 2000 - 10


}, 10);