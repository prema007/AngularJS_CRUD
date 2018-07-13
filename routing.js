var app = angular.module("app", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider

    .when("/userdetails", {
        templateUrl: "userdetails.html",
        controller : "MainCtrl"
    })

    .when("/login", {
        templateUrl: "login.html",
        controller : "LoginCtrl"
    })

    .when("/register", {
        templateUrl: "register.html",
        controller : "RegisterCtrl"
    })

    .when("/adduser", {
        templateUrl: "adduser.html",
        controller : "UserAddCtrl"
    })

    .otherwise({
        redirectTo: '/userdetails'
    });
})



