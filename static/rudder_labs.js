rudderanalytics = window.rudderanalytics = [];
for (var methods = ['load', 'page', 'track', 'identify', 'alias', 'group', 'ready', 'reset', 'getAnonymousId', 'setAnonymousId'], i = 0; i < methods.length; i++) {
    var method = methods[i];
    rudderanalytics[method] = function (a) {
        return function () {
            rudderanalytics.push([a].concat(Array.prototype.slice.call(arguments)))
        }
    }(method)
}
rudderanalytics.load('1hJb7RWWh9b6rU6NCo2T5WV886s', 'https://daasmetrics.com/data-plane', {
    useAutoTracking: true,
    valTrackingList: ['mauticform-input'],
    configUrl: 'https://daasmetrics.com/config-plane'
}), rudderanalytics.setAnonymousId(roiUpID()), rudderanalytics.page();