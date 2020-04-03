function jsonp(url, callback, success) {
    let script = document.createElement('script');
    script.src = url;
    script.type = 'text/javascript';
    window[callback] = function() {
        success && success()
    }
    document.body.appendChild(script)
}