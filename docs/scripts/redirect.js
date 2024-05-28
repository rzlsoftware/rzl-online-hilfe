function checkAndAddSlash() {
    var currentUrl = window.location.href;

    if (currentUrl.endsWith("/") 
     || currentUrl.endsWith(".html")
     || currentUrl.endsWith("index")) {
        return;
    }

    var newUrl = currentUrl + "/";
    window.location.href = newUrl;
}

checkAndAddSlash();
