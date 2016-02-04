var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

var button = buttons.ActionButton({
  id: "ezbutton",
  label: "Ez Helper",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: handleClick
});

function handleClick(state) {
    var newurl = "https://ezproxy.library.uq.edu.au/login?url=" + tabs.activeTab.url;
  //tabs.open("https://ezproxy.library.uq.edu.au/login?url=" + window.location.href);
  tabs.open(newurl);
}
