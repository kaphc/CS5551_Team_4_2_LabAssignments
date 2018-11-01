var app = angular.module('login_and_register', []);

app.run(function ($http) {
    // Sends this header with any AJAX request
    $http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    // Send this header only in post requests. Specifies you are sending a JSON object
    $http.defaults.headers.post['dataType'] = 'json'
});

app.controller('login_controller', function ($scope, $http) {

    $scope.login = function () {
        let url_req = 'lab-3/login?' +
            'user_name=' + $scope.formData.user_name + '&' +
            'password=' + $scope.formData.password + '&';
        var req = $http.post(url_req, $scope.formData).then(function (response) {
            if(response.data['success']){
                localStorage['logged_user'] = $scope.formData.user_name;
                location.href = "chat.html";
            }
            else{
                alert("Invalid credentials");
            }
        });
    };

    $scope.register = function () {
        let url_req = 'lab-3/register?' +
            'user_name=' + $scope.formData.user_name + '&' +
            'password=' + $scope.formData.password + '&' +
            'email_id=' + $scope.formData.email_id + '&';
        var req = $http.post(url_req, $scope.formData).then(function (response) {
            if(response.data['success']){
                location.href = "login.html";
                alert("Registered successfully");
            }
            else{
                alert("Error while registering");
            }
        });
    }
});
