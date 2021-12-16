
let btn = document.getElementById('berekeneninput');

const pi = 3.14;
let getal = 0.25;



setInterval(time, 1000);

function time() {
    var d = new Date();
    document.getElementById("timer").innerHTML = "Vergeet de tijd niet het is nu " + d.toLocaleTimeString();
}


btn.addEventListener('click', function () {
    var diameter = document.getElementById('diameterinput').value;
    document.getElementById("output").innerHTML = 'Omtrek cirkel = ' + diameter * pi;
    document.getElementById("outputopperv").innerHTML = 'Oppervlakte cirkel = ' + diameter * diameter * pi * getal;
});



