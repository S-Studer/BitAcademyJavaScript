
function changeColor() {
    let color = document.getElementById("colorInputColor").value;
    document.body.style.backgroundColor = color;
}


function changeText() {
    let color = document.getElementById("colorInputColor").value;
    document.querySelector('h1').style.color = color;
}


function changeTextBackground() {
    let color = document.getElementById("colorInputColor").value;
    document.querySelector('h1').style.color = color;
    document.body.style.backgroundColor = color;
}


