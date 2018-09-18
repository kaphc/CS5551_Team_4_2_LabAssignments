angular.module("registration", []).controller("registration-ctrl", function ($scope, $http) {

    $scope.registerUser = function (key, value) {

        let first_name = document.getElementById("first-name").value;
        let last_name = document.getElementById("last-name").value;
        let email = document.getElementById("email").value;
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        let terms_and_conditions = document.getElementById("terms_and_condition").value;

        if (first_name === "") {
            alert("Please enter first name");
            return;
        }
        if (email === "") {
            alert("Please enter email address");
            return;
        }
        if (username === "") {
            alert("Please enter username");
            return;
        }
        if (password === "") {
            alert("Please enter password");
            return;
        }
        if (localStorage[username] !== undefined) {
            alert("Username not available");
            return;
        }
        if (!terms_and_conditions) {
            alert("Please read terms and conditions");
        }
        else {
            localStorage.setItem(username, "{" +
                "\"name\":\"" + first_name +
                "\",\"last_name\":\"" + last_name +
                "\",\"email\":\"" + email +
                "\",\"username\":\"" + username +
                "\",\"password\":\"" + password +
                "\"}");
            location.href = "login_page.html";

        }
    }
});