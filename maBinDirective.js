angular.module("mancalaApp")
.directive('maBin', ['gameState', function(gameState) {
  function link(scope, element, attrs) {
    scope.goalBin = Boolean(scope.goalBin);

    //watch the value from the state object, update scope.stoneCount when this bin's count changes
    scope.$watch(function(){
      return gameState.binValues[scope.binName];
    }, function(newVal, oldVal){
      scope.stoneCount = newVal;
    }, false);

    //fires when user clicks on button
    scope.moveStones = function(){
      scope.$emit("moveStones", scope.binName);
    }

    //fires when any bin begins moving
    scope.$on("moveStonesBegin", function(event, data){
      scope.disabled = true;
    });

    //fires when movement ends and we can go back to allowing user interaction
    scope.$on("moveStonesEnd", function(event, data){
      scope.disabled = false;
    });
  }

  return {
    restrict: 'A',
    scope:{
      binName: "@maBin",
      goalBin: "@goalbin"
    },
    //binName: "@maBin",
    link: link,
    templateUrl: 'bin.html'
  };
}]);