var self = require("sdk/self");
var pageMod = require("sdk/page-mod");

// load pageMode scripts
pageMod.PageMod({
    //include: "*.google.com",
    include: /.*docs\.google\.com.*/,
    contentScriptWhen: "start",
    contentScriptFile: self.data.url("perf_mark_start.js"),
});

pageMod.PageMod({
    //include: "*.google.com",
    include: /.*docs\.google\.com.*/,
    contentScriptWhen: "end",
    contentScriptFile: self.data.url("perf_mark_end.js"),
});
