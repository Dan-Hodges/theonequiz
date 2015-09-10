var augmented = (function(FruitMaker) {
  FruitMaker.setFruit = function(fruit, slices) {
  	var chosenFruit = [];
  	for (var i = 0; i < slices; i++) {
  		chosenFruit.push(fruit);
  	}
  return chosenFruit;
  }
  return FruitMaker;
})(FruitMaker);