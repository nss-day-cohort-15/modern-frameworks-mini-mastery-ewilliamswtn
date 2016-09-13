"use strict";

app.controller("FlowerPage", function ($scope, FlowerGetter) {

  $scope.cat1 = [];
  $scope.cat2 = [];
  $scope.cat3 = [];

  FlowerGetter.getFlowers()
  .then( (data) => {
    $.each(data, function (index, value) {
      value.price = value.price.toFixed(2);

      if (value.category === "holiday") {
        $scope.cat1.push(data[index]);
      } else if (value.category === "bereavement") {
        $scope.cat2.push(data[index]);
      } else if (value.category === "misc") {
        $scope.cat3.push(data[index]);
      }
    });
  });
});