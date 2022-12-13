class Header {
    constructor() {
        this.color = "Red";
    }

    changeColor = function () {
        document.getElementById("demo").innerText += this;
    }
}

myheader = new Header();

// The window object calls the function:
window.addEventListener("load", myheader.changeColor);

// A button object calls the function:
document.getElementById("btn").addEventListener("click", myheader.changeColor);