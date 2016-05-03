/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, you can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * Created by Askeing on 2016/5/3.
 */

var self = require("sdk/self");
var pageMod = require("sdk/page-mod");
var sp = require("sdk/simple-prefs");
var { Hotkey } = require("sdk/hotkeys");

// get prefs
var msg_pm3 = sp.prefs["pm3"];
var msg_pm4 = sp.prefs["pm4"];
var msg_pm5 = sp.prefs["pm5"];
var msg_pm6 = sp.prefs["pm6"];
var msg_pm7 = sp.prefs["pm7"];
var msg_pm8 = sp.prefs["pm8"];
var msg_pm9 = sp.prefs["pm9"];
var msg_pm0 = sp.prefs["pm0"];

// if prefs are changed, then update to the latest prefs
function onPrefChange(prefName) {
    msg_pm3 = sp.prefs["pm3"];
    msg_pm4 = sp.prefs["pm4"];
    msg_pm5 = sp.prefs["pm5"];
    msg_pm6 = sp.prefs["pm6"];
    msg_pm7 = sp.prefs["pm7"];
    msg_pm8 = sp.prefs["pm8"];
    msg_pm9 = sp.prefs["pm9"];
    msg_pm0 = sp.prefs["pm0"];
}

// listen on prefs change
sp.on("", onPrefChange);

// load pageMode scripts
var pm = pageMod.PageMod({
    include: "*",
    //include: /.*docs\.google\.com.*/,
    contentScriptWhen: "start",
    contentScriptFile: self.data.url("perf_mark_hotkeys.js"),
});

Hotkey({
    combo: "control-shift-3",
    onPress: function() {
        pm.port.emit("addPerfMark", msg_pm3);
    }
});

Hotkey({
    combo: "control-shift-4",
    onPress: function() {
        pm.port.emit("addPerfMark", msg_pm4);
    }
});

Hotkey({
    combo: "control-shift-5",
    onPress: function() {
        pm.port.emit("addPerfMark", msg_pm5);
    }
});

Hotkey({
    combo: "control-shift-6",
    onPress: function() {
        pm.port.emit("addPerfMark", msg_pm6);
    }
});

Hotkey({
    combo: "control-shift-7",
    onPress: function() {
        pm.port.emit("addPerfMark", msg_pm7);
    }
});

Hotkey({
    combo: "control-shift-8",
    onPress: function() {
        pm.port.emit("addPerfMark", msg_pm8);
    }
});

Hotkey({
    combo: "control-shift-9",
    onPress: function() {
        pm.port.emit("addPerfMark", msg_pm9);
    }
});

Hotkey({
    combo: "control-shift-0",
    onPress: function() {
        pm.port.emit("addPerfMark", msg_pm0);
    }
});
