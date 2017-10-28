var myCtrl = function($scope) {
  this.hide = 'false';
  $scope.userName = '';
  $scope.homeCity = '';
  $scope.currentLocation = "Stash House"
  $scope.userCash = 200;
  $scope.chosenDrug = 'test'
  $scope.submitName = function() {
    this.hide = "true";
    $scope.currentCity = $scope.homeCity;
  };
  $scope.dealer1 = "";
  $scope.dealer2 = "billy";
  $scope.dealer3 = "billy";
  $scope.dealer4 = "billy";
  $scope.randobando = Math.round((Math.random() * 10) * 10);
  $scope.testing = "bayy";
  $scope.quantity = 0;
  $scope.clicker = function(price) {
    $scope.testing = price;
  }
  $scope.drugsForSale = {
    Weed : {
      name : "Weed",
      price1 : Math.floor((Math.random() * 100) + 1),
      price2 : Math.floor((Math.random() * 100) + 1),
      price3 : Math.floor((Math.random() * 100) + 1)
    },
    Speed : {
      name: "Speed",
      price1 : Math.floor((Math.random() * 100) + 1),
      price2 : Math.floor((Math.random() * 100) + 1),
      price3 : Math.floor((Math.random() * 100) + 1)
    },
    Ludes: {
      name : "Ludes",
      price1 : Math.floor((Math.random() * 100) + 1),
      price2 : Math.floor((Math.random() * 100) + 1),
      price3 : Math.floor((Math.random() * 100) + 1)
    },
    Shrooms : {
      name : "Shrooms",
      price1 : Math.floor((Math.random() * 100) + 1),
      price2 : Math.floor((Math.random() * 100) + 1),
      price3 : Math.floor((Math.random() * 100) + 1)
    },
    Acid : {
      name : "Acid",
      price1 : Math.floor((Math.random() * 100) + 1),
      price2 : Math.floor((Math.random() * 100) + 1),
      price3 : Math.floor((Math.random() * 100) + 1)
    },
    Coke : {
      name : "Coke",
      price1 : Math.floor((Math.random() * 100) + 1),
      price2 : Math.floor((Math.random() * 100) + 1),
      price3 : Math.floor((Math.random() * 100) + 1)
    },
    Smack : {
      name : "Smack",
      price1 : Math.floor((Math.random() * 100) + 1),
      price2 : Math.floor((Math.random() * 100) + 1),
      price3 : Math.floor((Math.random() * 100) + 1)
    }
  };

};


angular.module('angPractice').controller('myCtrl', myCtrl);



