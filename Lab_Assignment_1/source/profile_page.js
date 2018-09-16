angular.module("profile", []).controller("profile-ctrl", function ($scope, $http) {
    $scope.init = function(){
        $scope.username = localStorage.getItem("logged_user");
        $scope.userdetails = localStorage[username];
    };
});