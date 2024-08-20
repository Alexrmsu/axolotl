function getEntropyValues() {
    navigator.userAgentData
        .getHighEntropyValues([
            "architecture",
            "bitness",
            "formFactor",
            "model",
            "platform",
            "platformVersion",
            "uaFullVersion",
            "wow64"
        ])
        .then((values) => {
            document.getElementById('architecture').textContent = values.architecture;
            document.getElementById('bitness').textContent = values.bitness;
            document.getElementById('formFactor').textContent = values.formFactor;
            document.getElementById('model').textContent = values.model;
            document.getElementById('platformUA').textContent = values.platform;
            document.getElementById('platformVersion').textContent = values.platformVersion;
            document.getElementById('uaFullVersion').textContent = values.uaFullVersion;
            document.getElementById('wow64').textContent = values.wow64;
        });
}


window.onload = function() {
    getEntropyValues();
    document.getElementById('browserName').textContent = navigator.appName;
    document.getElementById('browserVersion').textContent = navigator.appVersion;
    document.getElementById('platform').textContent = navigator.platform;
    document.getElementById('userAgent').textContent = navigator.userAgent;



};

