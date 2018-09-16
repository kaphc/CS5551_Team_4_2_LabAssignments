angular.module('search-engine', []).controller('search-engine-ctrl', function ($scope, $http) {
    $scope.getResult = function () {
        let search_word = document.getElementById("search-word").value;
        $http.get('https://kgsearch.googleapis.com/v1/entities:search?query=' + search_word + '&key=AIzaSyDF_fECqSQmSoROurh_GyBTr-CvHN9O7VI&limit=1&indent=True').then(function (response) {

            var information_table = document.getElementById("information-table");
            var image_table = document.getElementById("image");

            for (var information_table_iter = information_table.rows.length - 1; information_table_iter > -1; information_table_iter--) {
                information_table.deleteRow(information_table_iter);
            }

            for (var image_iter = image_table.rows.length - 1; image_iter > -1; image_iter--) {
                image_table.deleteRow(image_iter);
            }

            let first_row = information_table.insertRow(0);
            let second_row = information_table.insertRow(1);
            let third_row = information_table.insertRow(2);
            let fourth_row = information_table.insertRow(3);
            let fifth_row = information_table.insertRow(4);
            let sixth_row = information_table.insertRow(5);
            let image_row = image.insertRow(0);


            let icon_url = '<p align="center"><img src=' + response.data['itemListElement'][0]['result']['image']['contentUrl'] + '></p>';
            let wiki_link = '<a href="' + response.data['itemListElement'][0]['result']['detailedDescription']['url'] + '">' + response.data['itemListElement'][0]['result']['detailedDescription']['url'] + '</a>';
            let site = '<a href="' + response.data['itemListElement'][0]['result']['url'] + '">'+response.data['itemListElement'][0]['result']['url']+'</a>';
            let license = '<a href="' + response.data['itemListElement'][0]['result']['detailedDescription']['license'] + '">'+response.data['itemListElement'][0]['result']['detailedDescription']['license']+'</a>';
            first_row.insertCell(0).innerHTML = "Name";
            first_row.insertCell(1).innerHTML = response.data['itemListElement'][0]['result']['name'];

            second_row.insertCell(0).innerHTML = "Description";
            second_row.insertCell(1).innerHTML = response.data['itemListElement'][0]['result']['description'];

            third_row.insertCell(0).innerHTML = "Article";
            third_row.insertCell(1).innerHTML = response.data['itemListElement'][0]['result']['detailedDescription']['articleBody'];

            fourth_row.insertCell(0).innerHTML = "Wiki Page";
            fourth_row.insertCell(1).innerHTML = wiki_link;

            fifth_row.insertCell(0).innerHTML = "URL";
            fifth_row.insertCell(1).innerHTML = site;

            sixth_row.insertCell(0).innerHTML = "License";
            sixth_row.insertCell(1).innerHTML = license;


            image_row.insertCell(0).innerHTML = icon_url;

        });
    }

});