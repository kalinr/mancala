angular.module("mancalaApp", [])

  .controller("GameController", ["$scope", "$interval", "gameState", function($scope, $interval, gameState) {
    //watch the value from the state object, update scope.stoneCount when this bin's count changes
    $scope.$watch(function(){
      return gameState.currentlyMoving
    }, function(newVal, oldVal){
      console.log("currentlyMoving;", newVal, oldVal);
      if(newVal) {
        //gameState.addNextStone(newVal);
        //$scope.moveStones();
        $interval.cancel($scope.moveInterval);
        $scope.moveInterval = $interval($scope.moveStones, 1000);
      }
    }, true);

    $scope.moveStones = function(){

      console.log("move stones!!", gameState.currentlyMoving);
      if(!gameState.currentlyMoving){
        //$scope.moveInterval = setTime
        $interval.cancel($scope.moveInterval);
        return;
      }

      gameState.addNextStone(gameState.currentMovingName);



    }

  }]);

