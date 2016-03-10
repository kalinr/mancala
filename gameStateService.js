angular.module("mancalaApp")
.factory('gameState', function() {

  console.log("This should only happen once");

  var binValues = {
      "rightbin":0,
      "top1":4,
      "top2":4,
      "top3":4,
      "top4":4,
      "top5":4,
      "top6":4,
      "leftbin": 0,
      "bottom1": 4,
      "bottom2": 4,
      "bottom3": 4,
      "bottom4": 4,
      "bottom5": 4,
      "bottom6": 4
    };

  var orderArray = ["rightBin","top6","top5","top4","top3","top2","top1","leftBin","bottom1","bottom2","bottom3","bottom4","bottom5","bottom6"];
  var binCount = orderArray.length;

  var removeStones = function(binName){
    binValues[binName] = 0;
  }

  var addStone = function(binName){
    binValues[binName]++;
  }

  var getStoneCount = function(binName){
    return binValues[binName];
  }

  return {
    removeStones: removeStones,
    addStone: addStone,
    getStoneCount: getStoneCount,
    binValues: binValues
  }
});