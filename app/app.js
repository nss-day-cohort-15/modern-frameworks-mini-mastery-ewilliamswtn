var app = angular.module("FlowerApp", ["ngRoute"])
.constant("FirebaseURL", "https://flower-power-angular.firebaseio.com");




//move to controller js page -> link to a partial -> route properly in app.js
app.controller("initialTest", function ($scope, FlowerGetter) {

  $scope.helloWorld = function () {
    FlowerGetter.getFlowers()
    .then( (data) => {
      console.log(data);
      $scope.flowers = data;
    })
  };

});







app.run( ($location, FBCreds) => {
  let creds = FBCreds;
  let authConfig = {
    apiKey: creds.key,
    authDomain: creds.authDomain
  };
  firebase.initializeApp(authConfig);
});