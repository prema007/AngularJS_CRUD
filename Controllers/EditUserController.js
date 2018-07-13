//var app = angular.module("app", []);
app.controller('EditUserCtrl', function ($scope, $location, $http) {
    debugger;
     $scope.id = sessionStorage.getItem('id');
     $scope.username = sessionStorage.getItem('username');
     $scope.email = sessionStorage.getItem('email');
     $scope.password = sessionStorage.getItem('password');

   // $scope.message = " You are Logged in "
    $scope.update = function () {
        debugger;

        var userdata = {"id": $scope.id, "username": $scope.username, "email": $scope.email, "password": $scope.password};


        $http.post('php/edit.php',userdata).
            success(function (userdata) {
            $scope.showout = true;
            $scope.output=userdata;

                console.log("posted successfully");
            }).error(function (userdata) {
                console.error("error in posting");
            })


        $location.path('/');
    }

     $scope.back = function () {
        debugger;
        $location.path('/');
    }


});






