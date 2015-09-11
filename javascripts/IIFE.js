var FruitMaker = (function() {
  var fruitArray = ["apples", "bananas", "cherries", "huckleberries"];

  return {
    addFruit: function(fruit) {
      fruitArray.push(fruit);
    },
    getFruits: function() {
      return fruitArray;
    }
  };
})();