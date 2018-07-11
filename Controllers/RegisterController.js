
app.controller('RegisterCtrl', function ($scope, $location) {
    debugger;
    $scope.message = " You are Registered successfully "
    $scope.loginpage = function () {
        debugger;
        $location.path('/login');
    }
});


