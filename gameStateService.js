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

  var orderArray = ["rightbin","top6","top5","top4","top3","top2","top1","leftbin","bottom1","bottom2","bottom3","bottom4","bottom5","bottom6"];
  var binCount = orderArray.length;

  var currentMovingName = null;
  var currentlyMoving = false;
  var movingStoneCount = 0;

  var removeStones = function(binName){
    this.currentMovingName = binName;
    this.currentlyMoving = true;
    movingStoneCount = binValues[binName];
    this.binValues[binName] = 0;
  }

  var addStone = function(binName){
    this.binValues[binName]++;
    movingStoneCount--;
  }

  var addNextStone = function(binName){
    var binIndex = orderArray.indexOf(binName) + 1;
    if(binIndex === binCount){
      binIndex = 0;
    }

    //add a stone to next bin if we are not at the end (checking just in case)
    if(movingStoneCount > 0){
      this.addStone(orderArray[binIndex]);
      this.currentMovingName = orderArray[binIndex];
    }

    //if we have reached the end, set to moving as false
    if(movingStoneCount === 0){
      this.currentMovingName = null;
      this.currentlyMoving = false;
    }
  }

  return {
    removeStones: removeStones,
    addStone: addStone,
    addNextStone: addNextStone,
    binValues: binValues,
    currentMovingName: currentMovingName,
    //movingStoneCount: movingStoneCount
  }
});