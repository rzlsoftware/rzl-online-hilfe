function checkAndAddSlash() {
    var currentUrl = window.location.href;

    if (currentUrl.endsWith("/") || currentUrl.endsWith(".html")) {
        return;
    }

    var newUrl = currentUrl + "/";
    window.location.href = newUrl;
}

checkAndAddSlash();
