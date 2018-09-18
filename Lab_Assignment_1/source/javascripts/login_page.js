var login = angular.module("login", []);

login.controller("login-ctrl", function ($scope, $http) {

    $scope.loginUser = function () {

        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;

        if (localStorage[username] === undefined) {
            alert("Invalid credentials");
        }
        else {
            let user_details = JSON.parse(localStorage[username]);
            if (user_details["password"] !== password) {
                alert("Invalid credentials");
            }
            else {
                localStorage.setItem("logged_user", localStorage[username]);
                location.href = "home_page.html";
            }
        }
    };
    $scope.signupUser = function () {
        location.href = "signup_page.html";
    }
});

login.controller('google-login-ctrl', ['$scope', function ($scope) {
    $scope.gmail = {
        username: "",
        email: ""
    };
    $scope.googleLogin = function () {
        var params = {
            'clientid': '211747334293-ndnqgrrihpalcr5lo00ji49sfs68kqg4.apps.googleusercontent.com',
            'cookiepolicy': 'single_host_origin',
            'callback': function (result) {
                if (result['status']['signed_in']) {
                    location.href = "home_page.html";
                    var request = gapi.client.plus.people.get(
                        {
                            'userId': 'me'
                        }
                    );
                    request.execute(function (resp) {
                        $scope.$apply(function () {
                            $scope.gmail.username = resp.displayName;
                            $scope.gmail.email = resp.emails[0].value;
                            $scope.g_image = resp.image.url;
                            localStorage.setItem("logged_user", "{" +
                                "\"name\":\"" + resp.displayName +
                                "\",\"email\":\"" + resp.emails[0].value +
                                "\",\"image\":\"" + resp.image.url +
                                "\"}");
                        })
                    })
                }
            },
            'approvalprompt': 'force',
            'scope': 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read'
        };
        gapi.auth.signIn(params);

    };
    $scope.facebookLogin = function () {
        FB.login(function (response) {
            if (response.authResponse) {
                FB.api('/me', 'GET', {fields: 'email, first_name, name, id, picture'}, function (response) {
                    $scope.$apply(function () {
                        $scope.facebook.username = response.name;
                        $scope.facebook.email = response.email;
                        $scope.fb_image = response.picture.data.url;
                        localStorage.setItem("logged_user", "{" +
                            "\"name\":\"" + response.name +
                            "\",\"email\":\"" + response.email +
                            "\",\"image\":\"" + response.picture.data.url +
                            "\"}");
                    });
                })
            }
        }, {
            scope: 'email, user_likes',
            return_scopes: true
        })
    };
    $scope.facebook = {
        username: "",
        email: ""
    };
}]);