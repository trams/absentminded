var self = require("sdk/self");
var prefs = require('sdk/simple-prefs');

var button = require("sdk/ui/button/action").ActionButton({
  id: "check-ids",
  label: "Check ids",
  icon: {
    "16" : "./check-symbol-16.png",
    "32" : "./check-symbol-32.png",
    "64" : "./check-symbol-64.png"
  },
  onClick: function() {
    console.log("Loading ids...");
	  var ids = prefs.prefs["ids"];

	  console.log(ids);

    require("sdk/tabs").activeTab.attach({
      contentScriptFile: [self.data.url("jquery.min.js"), self.data.url("highlight.js")],
      contentScriptOptions: { "ids" : ids }
    });
  }
});