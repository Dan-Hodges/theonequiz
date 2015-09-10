var FruitMaker = (function(SliceMaker) {
  SliceMaker.slices = function(fruit, slices) {
    var slicedFruit = [];
    for (var i = 0; i < slices; i++) {
      slicedFruit.push(fruit);
    }
    return slicedFruit;
  };
  return SliceMaker;
})(FruitMaker);