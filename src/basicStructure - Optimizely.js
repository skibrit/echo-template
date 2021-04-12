var utils = window["optimizely"].get('utils');
var basicStructure = {
    init: function () {
        this.mainCss();
        this.mainJS();
        this.goalJS();
    },
    mainCss: function () {
        var s = document.createElement('style');
        s.setAttribute('type', 'text/css');
        document.head.appendChild(s).textContent = '';

    },
    mainJS: function () {
        //For JS
    },
    goalJS: function () {
        //For JS
    }
};

utils.waitUntil(function () {
    return (document.querySelector('main .quote-data > .section')  && !document.querySelector('.addcless'));
}).then(function () {
    console.log("Chosen Products Displayed: Final Check: All Devices: ES Motor New Q&B V#1 10.10.2019 - v:1.0.0");
    basicStructure.init();
});