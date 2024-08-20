async function getEntropyValues(){
    const navigatorTester = globalThis.navigator? globalThis.navigator : {};

}


window.onload = function() {
    document.getElementById('browserName').textContent = navigator.appName;
    document.getElementById('browserVersion').textContent = navigator.appVersion;
    document.getElementById('platform').textContent = navigator.platform;
    document.getElementById('userAgent').textContent = navigator.userAgent;

};

