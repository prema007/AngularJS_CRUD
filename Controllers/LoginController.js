//var app = angular.module("app", []);
app.controller('LoginCtrl', function ($scope, $location) {
    debugger;
    $scope.message = " You are Logged in "
    $scope.welcomepage = function () {
        debugger;
        $location.path('/index');
    }

    $scope.loginpage = function () {
        debugger;
        $location.path('/register');
    }
});






