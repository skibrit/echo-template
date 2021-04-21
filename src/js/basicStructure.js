var basicStructure = {
  init: function () {
    this.mainCss();
    this.mainJS();
    this.goalJS();
  },
  mainCss: function () {
    var s = document.createElement("style");
    s.setAttribute("type", "text/css");
    var cssContent = ``;
    if (cssContent) document.head.appendChild(s).textContent = cssContent;
  },
  mainJS: function () {
    //For JS
  },
  goalJS: function () {
    //For JS
  },
  slider: function () {
    //For JS
  },
};

(function pollFor() {
  if (document.getElementById("menu") && window.jQuery !== undefined) {
    basicStructure.init();
    console.log("Variation- A: 01");
  } else {
    setTimeout(pollFor, 25);
  }
})();
