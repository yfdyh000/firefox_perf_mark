/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, you can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * Created by Askeing on 2016/3/26.
 */

var self = require("sdk/self");
var pageMod = require("sdk/page-mod");
var sp = require("sdk/simple-prefs");
var notifications = require("sdk/notifications");


function eval_url_include(url_match_pattern, is_regexp) {
    /*
     * The string style match pattern example:
     *   "*.google.com"
     *   "*.google.com.tw"
     * or exactly match URL:
     *   "http://example.mozilla.org/foo/bar/"
     * */
    var url_include = url_match_pattern;
    if (is_regexp == true) {
        /*
         * The RegExp style match pattern string example:
         *   "http[s]{0,1}:\\/\\/docs\\.google\\.com.*"
         *   ".*docs\\.google\\.com.*"
         * */
        try {
            url_include = new RegExp(url_match_pattern);
        } catch (e) {
            // do nothing.
        }
    }
    // send notification to system
    if (typeof(url_include) == "string") {
        notifications.notify({
            title: "Perf Mark of Add-On Start and End",
            text: "URL Match Pattern:\n" + url_include,
        });
    } else {
        notifications.notify({
            title: "Perf Mark of Add-On Start and End",
            text: "URL Match Pattern:\n/" + url_include.source + "/",
        });
    }
    return url_include;
}

var pm_start, pm_end;

function load_page_mod(url_include) {
    if(typeof(pm_start) != "undefined" || pm_start) {
        // re-load pageMod
        pm_start.destroy();
        pm_end.destroy();
    }
    pm_start = pageMod.PageMod({
        include: url_include,
        contentScriptWhen: "start",
        contentScriptFile: self.data.url("perf_mark_start.js"),
    });

    pm_end = pageMod.PageMod({
        include: url_include,
        contentScriptWhen: "end",
        contentScriptFile: self.data.url("perf_mark_end.js"),
    });
}

// get prefs
var is_regexp = sp.prefs["is_regexp"];
var url_match_pattern = sp.prefs["url_match_pattern"];

// if prefs are changed, then update to the latest prefs
function onPrefChange(prefName) {
    is_regexp = sp.prefs["is_regexp"];
    url_match_pattern = sp.prefs["url_match_pattern"];
    var url_include = eval_url_include(url_match_pattern, is_regexp);
    load_page_mod(url_include);
}

// listen on prefs change
sp.on("btn_update", onPrefChange);

var url_include = eval_url_include(url_match_pattern, is_regexp);
load_page_mod(url_include);

