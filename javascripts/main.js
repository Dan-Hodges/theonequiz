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

/// Array Methods ///
var Planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
console.log('Planets :', Planets);

function sortedPlanets(array) {
  var sortedPlanets = array.slice().sort();
  console.log("sortedPlanets :", sortedPlanets);
  return sortedPlanets
}
sortedPlanets(Planets);


function flipChar(element, index, array) {
	return array[index] = element.split("").reverse().join("");
}
function reversedPlanets (array) {
	var reversedPlanets = array.slice();
	reversedPlanets.forEach(flipChar);
	console.log("reversedPlanets:", reversedPlanets);
	return reversedPlanets;
}
reversedPlanets(Planets);


function longPlanets (array) {
	var longPlanets = [];
	for (var i = 0; i < array.length; i++) {
		if (array[i].length > 6) {
			longPlanets.push(array[i]);
		}
	}
	console.log("longPlanets", longPlanets);
}
longPlanets(Planets);

/// XHR ///

function getAnimals () {
	$.ajax({
	  url: "data/animals.json"
	}).done(function(data) {
	  console.log("animals :", data.animals);
	  return data.animals;
	});
}
getAnimals();