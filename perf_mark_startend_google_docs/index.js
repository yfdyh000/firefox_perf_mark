/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, you can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * Created by Askeing on 2016/3/26.
 */

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
