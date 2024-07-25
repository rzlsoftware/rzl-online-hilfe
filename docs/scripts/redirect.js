function checkAndAddSlash() {
    var currentUrl = window.location.href;

    if (currentUrl.endsWith("/") 
     || currentUrl.endsWith(".html")
     || currentUrl.endsWith("index")
     || currentUrl.split('#')[1]) {
        return;
    }

    var newUrl = currentUrl + "/";
    window.location.href = newUrl;
}

checkAndAddSlash();
