app.controller('MainCtrl', function ($scope, $http, $location, $rootScope,$window) {
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
         $http.get('php/delete.php?id='+id).
            success(function (data) {
             //var id = id;
            //$scope.showout = true;
            $scope.output=data;
            if($scope.output == 'Deleted')
                {
                    alert("Successfully Deleted");

                   $window.location.reload();
                }

                console.log("posted successfully");
            }).error(function (data) {
                console.error("error in posting");
            })
    }
});






