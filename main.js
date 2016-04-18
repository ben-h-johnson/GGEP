var app = angular.module("sampleApp", ["firebase"]);

app.controller("SampleCtrl", function($scope, $firebaseObject) {
  var ref = new Firebase("https://crackling-inferno-8497.firebaseio.com");
  // download the data into a local object
  $scope.data = $firebaseObject(ref);
  // putting a console.log here won't work, see below
});

app.controller("SampleCtrl", function($scope, $firebaseObject) {
  var ref = new Firebase("https://<YOUR-FIREBASE-APP>.firebaseio.com/data");
  // download the data into a local object
  var syncObject = $firebaseObject(ref);
  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  syncObject.$bindTo($scope, "data");
});