function onLoadFunction() {
    gapi.client.setApiKey('AIzaSyBHJ6I-KIAvQWgJtpxGHOmll4xiD9vxPQg');
    gapi.client.load('plus', 'v1', function () {
    });
}

window.fbAsyncInit = function () {
    FB.init({
        appId: '541867319568010',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v3.1',
        status: true
    });
};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));