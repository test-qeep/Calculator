var button1 = document.getElementById("button-1");
var button2 = document.getElementById("button-2");
var button3 = document.getElementById("button-3");
var heading = document.getElementById("heading")

changeColor = function (color) {
    return function () {
        heading.style.color = color;
    }
};

increment = function (event) {
    var i = parseInt(event.target.innerHTML);
    event.target.innerHTML = i + 1;
};

buttons = document.getElementsByClassName("increment-button");
for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    button.addEventListener("click", increment);
}

button1.addEventListener("click", changeColor("red"));
button2.addEventListener("click", changeColor("green"));
button3.addEventListener("click", changeColor("blue"));
