function WelcomeCtrl($scope, $http) {
  alert("in welcome controller");
  $http.get('/welcome.json').success(function(data) {
    $scope.books = data;
  });
}
WelcomeCtrl.$inject = ['$scope', '$http'];
