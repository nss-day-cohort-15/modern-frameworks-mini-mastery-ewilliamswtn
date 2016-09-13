var app = angular.module("FlowerApp", ["ngRoute"])
.constant("FirebaseURL", "https://flower-power-angular.firebaseio.com");

app.controller("WelcomePage", function ($scope, $window) {

  $scope.goGetFlowers = function () {
    $window.location.href = "#/flowers";
  };
});

app.config(function($routeProvider) {
  $routeProvider.
    when('/flowers', {
      templateUrl: 'partials/flower-view.html',
      controller: 'FlowerPage'
    });
      // .otherwise('/');
});

app.run( ($location, FBCreds) => {
  let creds = FBCreds;
  let authConfig = {
    apiKey: creds.key,
    authDomain: creds.authDomain
  };
  firebase.initializeApp(authConfig);
});