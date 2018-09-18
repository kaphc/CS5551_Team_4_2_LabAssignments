angular.module("profile", []).controller("profile-ctrl", function ($scope) {
    $scope.init = function(){
        let information_table = document.getElementById("information-table");
        let image_table = document.getElementById("image");
        let first_row = information_table.insertRow(0);
        let second_row = information_table.insertRow(1);
        let third_row = information_table.insertRow(2);
        let fourth_row = information_table.insertRow(3);
        let fifth_row = information_table.insertRow(4);
        let sixth_row = information_table.insertRow(5);
        let seventh_row = information_table.insertRow(6);
        let image_row = image.insertRow(0);

        var information = JSON.parse(localStorage['logged_user']);

        first_row.insertCell(0).innerHTML = "Name";
        first_row.insertCell(1).innerHTML = information['name'];
        second_row.insertCell(0).innerHTML = "Email";
        second_row.insertCell(1).innerHTML = information['email'];
        image_link = "<a href=\"" + information['image'] + "\">";
        image_row.insertCell(0).innerHTML = image_link
    };
    $scope.init();
});