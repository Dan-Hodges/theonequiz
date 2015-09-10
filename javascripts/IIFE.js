var FruitMaker = (function() {
  var fruitArray = ["apples", "bananas", "cherries", "huckleberries"];

  return {
    getFruits: function() {
      return fruitArray;
    },
    addFruit: function(fruit) {
      fruitArray.push(fruit);
    }
  };
})();