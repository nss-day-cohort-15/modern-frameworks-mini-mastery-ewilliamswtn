"use strict";

app.factory("FlowerGetter", ($q, $http, FirebaseURL) => {

  let getFlowers = () => {
    let flowers = [];
    return $q((resolve, reject) => {
      $http.get(`${FirebaseURL}/arrangements.json`)
      .success((flowersObj) => {
        if (flowersObj) {
          Object.keys(flowersObj).forEach((key) => {
            flowersObj[key].id = key;
            flowers.push(flowersObj[key]);
          });
        }
        resolve(flowers);
      })
      .error((error) => {
        reject (error);
      });
    });
  };
  return {getFlowers};
});