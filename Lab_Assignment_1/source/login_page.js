angular.module("login", []).controller("login-ctrl", function ($scope, $http) {

    $scope.loginUser = function (key, value) {

        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;

        if(localStorage[username] === undefined)
        {
            alert("Invalid credentials");
        }
        else
        {
            var user_details = JSON.parse(localStorage[username]);
            if(user_details['password']!==password){
                alert("Invalid credentials");
            }
            else{
                location.href = "home_page.html";
            }
        }
    };
    $scope.signupUser = function (key, value) {
        location.href = "signup_page.html";
    }

});