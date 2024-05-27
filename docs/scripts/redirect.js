function checkAndAddSlash() {
    var currentUrl = window.location.href;

    if (currentUrl.endsWith("/")) {
        return;
    }

    var newUrl = currentUrl + "/";
    window.location.href = newUrl;
}

checkAndAddSlash();