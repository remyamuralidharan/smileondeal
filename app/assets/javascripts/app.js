var app = angular.module('app',['ngRoute']);
// app.factory('Welcome', function($resource) {
//   return $resource("welcome/:id", { id: '@id' }, {
//     index:   { method: 'GET', isArray: true, responseType: 'json' },
//     show:   { method: 'GET', isArray: true, responseType: '' },
//   });

// });


app.config(['$routeProvider', '$locationProvider',function ($routeProvider,$locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', {
        templateUrl: 'welcome/index.html',
        controller: 'WelcomeCtrl'
    })
    .when("/welcome/:id", {
        templateUrl: 'welcome/show.html',
        controller: 'WelcomeCtrl'
    })
}]);

var controllers = {};
controllers.WelcomeCtrl = function ($scope,$http,$location,$window){
  $http.get('/welcome.json').success(function(data) {
    $scope.categories = data;
  });

  $scope.showChilds = function(category,obj)
  {
    var elem = angular.element(obj.target.nextElementSibling);
    elem.removeClass('ng-hide').toggle();
    $('.main').not(elem).hide();
  }
  $scope.showSection = function(subcat,obj)
  {
    angular.element(obj.target.nextElementSibling).toggle();
  };
  $scope.ShowProduct = function(section_id)
  {
    $http.get('/welcome/' + section_id +'.json').success(function(data) {
    $scope.products = data;
  });
    $('.dropdown-menu').hide();
    $('.products_details').toggle();
  };
};
app.controller(controllers);


// config(function ($routeProvider, $locationProvider) {
//     $routeProvider
//       .when('/', {
//         templateUrl: 'partials/main.html',
//         controller: 'MainCtrl'
//       })
//       .when('/login', {
//         templateUrl: 'partials/login.html',
//         controller: 'LoginCtrl'
//       })
//       .otherwise({
//         redirectTo: '/'
//       });

//     $locationProvider.html5Mode(true);
//   });


// app.controller('welcomeController', ['$scope','Welcome', function($scope, Welcome) {
//   alert("rails controller");
//     $scope.categories = Welcome.index();
//     $scope.products = Welcome.show();
//     $scope.showChilds = function(category,obj)
//     {
//       angular.element(obj.target.nextElementSibling).toggle();
//     }
//     $scope.showSection = function(subcat,obj)
//     {
//       angular.element(obj.target.nextElementSibling).toggle();

//     };

//     // $scope.showProduct = function(item) {
//     //   $scope.currentItem = item;
//     // };
// }]);

// when('/user/:slug/discussions',
//   {
//     templateUrl: 'angular/templates/discussions/index.html',
//     controller: 'DiscussionsIndexCtrl'
//   }
// )
// app.controller('WelcomeCtrl', ['$scope','$http', function($scope, $http) {
//      alert("in welcome controller");

//     // $scope.showProduct = function(item) {
//     //   $scope.currentItem = item;
//     // };
// }]);
// function WelcomeCtrl($scope, $http) {
//   alert("in welcome controller");
//   $http.get('/welcome.json').success(function(data) {
//     $scope.books = data;
//   });
// }
// / WelcomeCtrl.$inject = ['$scope', '$http'];
