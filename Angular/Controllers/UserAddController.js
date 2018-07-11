
app.controller('UserAddCtrl', function ($scope, $location, $http, $rootScope) {
    debugger;
        
    $scope.adduser = function () {
        debugger;
        $location.path('/adduser');
    }
    
    $scope.user = function () {
        debugger;        
        
            var userdata = {"username": $scope.newname, "email": $scope.newemail, "password": $scope.newpassword};
        
        
        $http.post('php/add.php',userdata).
            success(function (userdata) {
            $scope.showout = true;
            $scope.output=userdata;         

                console.log("posted successfully");
            }).error(function (userdata) {
                console.error("error in posting");
            })        
            
             $location.path('/');
                
             }         
                    
        
});
