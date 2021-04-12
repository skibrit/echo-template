var basicStructure = {
    init: function () {
        this.mainCss();
        this.mainJS();
        this.goals();
    },
    mainCss: function () {
        var s = document.createElement('style');
        s.setAttribute('type', 'text/css');
        document.head.appendChild(s).textContent = '' +
            'body {\n' +
            '    border: 2px solid #000;\n' +
            '}';
    },
    mainJS: function () {
        //For JS
    },
    goals: function () {
        // For Goal/Metric JS
    }
};

(function pollForLoadVariation() {
    if (document.readyState === 'complete' &&  window.jQuery !== undefined) {
        basicStructure.init();
        console.log("Variation- A: 01");
    } else {
        setTimeout(pollForLoadVariation, 25);
    }
})();