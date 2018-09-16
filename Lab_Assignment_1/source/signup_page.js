angular.module("registration", []).controller("registration-ctrl", function ($scope, $http) {

    $scope.registerUser = function (key, value) {

        let first_name = document.getElementById("first-name").value;
        let last_name = document.getElementById("last-name").value;
        let email = document.getElementById("email").value;
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;

        localStorage.setItem(username, "{" +
            "\"first_name\":\"" + first_name +
            "\",\"last_name\":\"" + last_name +
            "\",\"email\":\"" + email +
            "\",\"username\":\"" + username +
            "\",\"password\":\"" + password +
            "\"}");

        alert("Registration Successful");
    }

});