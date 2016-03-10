angular.module("mancalaApp")
.directive('maBin', ['gameState', function(gameState) {
  function link(scope, element, attrs) {

    //watch the value from the state object, update scope.stoneCount when this bin's count changes
    scope.$watch(function(){
      console.log("watch function!");
      return gameState.binValues[scope.binName];
    }, function(newVal, oldVal){
      scope.stoneCount = newVal;
    }, false);

    //watch for currentlyMoving var and disable when stones are being moved
    scope.$watch(function(){
      return gameState.currentlyMoving;
    }, function(newVal, oldVal){
      scope.disabled = newVal;
    }, false);

    scope.moveStones = function(){
      gameState.removeStones(scope.binName);
    }
  }

  return {
    restrict: 'A',
    scope:{
      binName: "@maBin"
    },
    link: link,
    templateUrl: 'bin.html'
  };
}]);