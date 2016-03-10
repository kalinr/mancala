angular.module("mancalaApp")
.factory('gameState', ["$interval", function($interval) {

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

  var beginMove = function(binName){
    var that = this;

    this.currentMovingName = binName;
    this.currentlyMoving = true;
    this.movingStoneCount = binValues[binName];
    this.binValues[binName] = 0;

    $interval.cancel(this.moveInterval);
    this.moveInterval = $interval(function() {
      that.addNextStone();
    }, 1000);
  }

  var addStone = function(binName){
    this.binValues[binName]++;
    this.movingStoneCount--;
  }

  var addNextStone = function(){
    var binIndex = orderArray.indexOf(this.currentMovingName) + 1;
    if(binIndex === binCount){
      binIndex = 0;
    }

    //add a stone to next bin if we are not at the end (checking just in case)
    if(this.movingStoneCount > 0){
      this.addStone(orderArray[binIndex]);
      this.currentMovingName = orderArray[binIndex];
    }

    //if we have reached the end, set to moving as false
    if(this.movingStoneCount === 0){
      this.currentMovingName = null;
      this.currentlyMoving = false;
      $interval.cancel(this.moveInterval);
    }
  }

  return {
    beginMove: beginMove,
    addStone: addStone,
    addNextStone: addNextStone,
    binValues: binValues,
    currentMovingName: currentMovingName,
    movingStoneCount: movingStoneCount
  }
}]);