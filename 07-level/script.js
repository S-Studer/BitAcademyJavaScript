
const pi = 3.14;
let btn = document.getElementById('berekeneninput');


btn.addEventListener('click', function () {
    var diameter = document.getElementById('diameterinput').value;
    document.getElementById("output").innerHTML = diameter * pi;
});


