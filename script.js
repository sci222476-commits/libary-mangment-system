function calculateFine() {

let days = document.getElementById("days").value;

let fine = days * 2;

document.getElementById("result").innerHTML =
"قيمة الغرامة: " + fine + " دينار";
}