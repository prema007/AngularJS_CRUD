app.controller('MainCtrl', function ($scope, $http, $location, $rootScope) {
    debugger;
    $http.get("userdetails.json")
        .then(function (response) {

            $rootScope.Details = response.data;


    /*var json = JSON.stringify( $rootScope.Details, function( key, value ) {
    if( key === "$$hashKey" ) {
        return undefined;
    }

    return value;

});*/

    });

    $scope.adduser = function () {
        debugger;
        $location.path('/adduser');
    }

    $scope.viewuser = function () {
        debugger;
        $location.path('/viewuser');
    }

    $scope.edituser = function () {
        debugger;
        $location.path('/edituser');
    }

    $scope.delete = function (id) {
        debugger;
        var id = id;
         $http.post('php/delete.php', id).
            success(function (id) {
             //var id = id;
            $scope.showout = true;
            $scope.output=id;

                console.log("posted successfully");
            }).error(function (id) {
                console.error("error in posting");
            })
    }
});






