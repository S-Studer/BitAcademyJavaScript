const ant = [
    "Parijs",
    8,
    "IJsselmeer",
    ["Volkswagen", "Audi", "Opel", "Porsche", "BMW", "Mercedes", "Mercedes-Benz"],
    ["Texel", "Vlieland", "Terschelling", "Ameland", "Schiermonnikoog"],
];

const vraag = [
    "Wat is de hoofdstad van Frankrijk?",
    "Hoeveel benen heeft een spin?",
    "Wat is het grootste meer van Nederland?",
    "Noem een Duits automerk",
    "Noem een Waddeneiland",
];

var score = 0;

document.getElementById("stadtext").innerHTML = vraag[0];
document.getElementById("spintext").innerHTML = vraag[1];
document.getElementById("meertext").innerHTML = vraag[2];
document.getElementById("autotext").innerHTML = vraag[3];
document.getElementById("wadtext").innerHTML = vraag[4];

let Button = document.getElementById("submit");

Button.addEventListener("click", checkAnswers, false);

function checkAnswers() {
    let Stad = document.getElementById("stad").value;
    let Spin = document.getElementById("spin").value;
    let Meer = document.getElementById("meer").value;
    let Auto = document.getElementById("auto").value;
    let Wad = document.getElementById("wad").value;
    
    if (Stad == ant[0]) {
        correct++;
        document.getElementById('stad').style.backgroundColor = "Green"
    } else {
        document.getElementById('stad').style.backgroundColor = "Red"
    };

    if (Spin == ant[1]) {
        correct++;
        document.getElementById('spin').style.backgroundColor  = "green"
    } else {
        document.getElementById('spin').style.backgroundColor = "Red"
    };

    if (Meer == ant[2]) {
        correct++;
        document.getElementById('meer').style.backgroundColor  = "green"
    } else {
        document.getElementById('meer').style.backgroundColor = "Red"
    };

    if (ant[3].includes(Auto)) {
        correct++;
        document.getElementById('auto').style.backgroundColor  = "green"
    } else {
        document.getElementById('auto').style.backgroundColor = "Red"
    };

    if (ant[4].includes(Wad)) {
        correct++;
        document.getElementById('wad').style.backgroundColor  = "green"
    } else {
        document.getElementById('wad').style.backgroundColor = "Red"
    };

    document.getElementById("score").innerHTML = "Score: " + correct;
};
