var FruitMaker = (function() {
  var fruitArray = ["apples", "bananas", "cherries", "huckleberries"];

  return {
    getFruit: function() {
      return fruitArray;
    },
    setFruit: function(fruit) {
      fruitArray.push(fruit);
    }
  };
})();