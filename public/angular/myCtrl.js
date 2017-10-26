var myCtrl = function($scope) {
  this.hide = 'false';
  $scope.userName = '';
  $scope.secretLabel = '';
  $scope.submitName = function() {
    if ($scope.userName === 'fuckyou') {
      this.hide = "true";
      $scope.secretLabel = 'No fuck you';
    };
  };
};

angular.module('angPractice').controller('myCtrl', myCtrl);



