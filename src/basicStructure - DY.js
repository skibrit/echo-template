var basicStructure = {
    init: function () {
        this.mainCss();
        this.mainJS();
    },
    mainCss: function () {
        var s = document.createElement('style');
        s.setAttribute('type', 'text/css');
        document.head.appendChild(s).textContent = '';

    },
    mainJS: function () {
        DYO.waitForElement('body', function () {
            alert('articles loaded')
        })
    }
};
DY.API('callback', function () {
    console.log("Chosen Products Displayed: Final Check: All Devices: ES Motor New Q&B V#1 10.10.2019 - v:1.0.0");
    basicStructure.init();
});

$.ajax({
    method: "POST",
    url: "https://www.tsb.co.uk/sites/Satellite?pagename=public/seBorrowPanelDetail",
    data: {years: 7, months: 0, amount: 10000}
}).done(function (msg) {
    alert("Data Saved: " + msg);
});