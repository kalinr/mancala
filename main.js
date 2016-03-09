angular.module("mancalaApp", [])

  .controller("GameController", function($scope) {
    $scope.helloTo = {};
    $scope.helloTo.title = "AngularJS";



  })

  .directive('maBin', function() {
    function link(scope, element, attrs) {

      var i, maindex;

      console.log(scope.maBin, scope.mabin, "attrs: ", attrs, element, scope);

      //attrs.$set('src',fullPathUrl + attrs.fullPath);

      switch(scope.maBin){
        case "left":
        case "right":
          attrs.$set('id', scope.maBin + "bin");
          break;
        default:
          attrs.$set('id', scope.maBin + scope.index);
      }


    }

    return {
      restrict: 'A',
      scope:{
        index:"@",
        maBin: "@"
      },
      link: link
    };
  });