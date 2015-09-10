var Planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
element = document.getElementById("vanilla_output");
element.innerHTML = "This content generated with vanilla JavaScript";
$(document).ready(function(){
	$("#jquery_output").text('This content generated with jQuery');
});

function modulus (num1, num2) {
  var num3 = num1 % num2;
  return num3;
}

function add(num1, num2){
	return num1 + num2;
}
function subtract(num1, num2){
	return num1 - num2;
}

function doMath(num1, num2, functionRef){
  return functionRef(num1, num2);
}

Planets = Planets.sort();
console.log("Sorted Planets :", Planets);
planetString = Planets.toString();
planetString = planetString.split("").reverse().join("");
backwardsPlanets = planetString.split(',');
console.log("backwardsPlanets :", backwardsPlanets);

longPlanets = [];
for (var i = 0; i < Planets.length; i++) {
	if (Planets[i].length > 6) {
		longPlanets.push(Planets[i]);
	}
}
console.log("longPlanets", longPlanets);


$.ajax({
  url: "data/animals.json"
}).done(function(data) {
  console.log("animals :", data.animals);
});