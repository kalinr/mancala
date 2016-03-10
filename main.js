angular.module("mancalaApp", [])

  .controller("GameController", ["$scope", "gameState", function($scope, gameState) {
    //watch the value from the state object, update scope.stoneCount when this bin's count changes
    $scope.$watch(function(){
      return gameState.currentlyMoving
    }, function(newVal, oldVal){
      console.log("currentlyMoving;", newVal, oldVal);
      if(!newVal) {
        $scope.$broadcast("moveStonesEnd", {});
      }else{
        $scope.$broadcast("moveStonesBegin", {});
      }
    }, true);

    $scope.$on("moveStones", function(event, binName){
      gameState.beginMove(binName);
    });

  }]);

