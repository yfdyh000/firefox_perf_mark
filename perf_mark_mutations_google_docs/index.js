var self = require("sdk/self");
var pageMod = require("sdk/page-mod");

// load pageMode scripts
pageMod.PageMod({
    //include: "*.google.com",
    include: /.*docs\.google\.com.*/,
    contentScriptWhen: "start",
    contentScriptFile: [self.data.url("perf_mutations.js"), self.data.url("jquery-1.12.2.min.js")]
});
