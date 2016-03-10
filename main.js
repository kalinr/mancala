angular.module("mancalaApp", [])

  .controller("GameController", ["$scope", "$interval", "gameState", function($scope, $interval, gameState) {
    //watch the value from the state object, update scope.stoneCount when this bin's count changes
    /*$scope.$watch(function(){
      return gameState.currentlyMoving
    }, function(newVal, oldVal){
      console.log("currentlyMoving;", newVal, oldVal);
      if(newVal) {
        //gameState.addNextStone(newVal);
        //$scope.moveStones();
        $interval.cancel($scope.moveInterval);
        $scope.moveInterval = $interval($scope.moveStones, 1000);
      }
    }, true);*/

    $scope.$on("moveStones", function(event, binName){
      gameState.removeStones(binName);
      $interval.cancel($scope.moveInterval);
      $scope.moveInterval = $interval($scope.moveStones, 1000);
      $scope.$broadcast("moveStonesBegin", {});
    });

    $scope.moveStones = function(){
      gameState.addNextStone(gameState.currentMovingName);

      if(!gameState.currentlyMoving){
        $interval.cancel($scope.moveInterval);
        $scope.$broadcast("moveStonesEnd", {});
        return;
      }
    }

  }]);

