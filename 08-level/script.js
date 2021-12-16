
let btn = document.getElementById('berekeneninput');
const pi = 3.14;
let cijfertjes = 0.25;
let now = 'De tijd is nu ' + Date();

document.getElementById("tijd").innerHTML = now;



btn.addEventListener('click', function () {
    var diameter = document.getElementById('diameterinput').value;
    document.getElementById("output").innerHTML = 'Dit is de omtrek van de circel = ' + diameter * pi;
});


btn.addEventListener('click', function () {
    var diameter = document.getElementById('diameterinput').value;
    document.getElementById("outputoppervlakte").innerHTML = 'Dit is de oppervlakte van de circel = ' + diameter * diameter * pi * cijfertjes;
});




