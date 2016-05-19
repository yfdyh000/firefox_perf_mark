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
var enable_pm3 = sp.prefs["enable_pm3"];
var enable_pm4 = sp.prefs["enable_pm4"];
var enable_pm5 = sp.prefs["enable_pm5"];
var enable_pm6 = sp.prefs["enable_pm6"];
var enable_pm7 = sp.prefs["enable_pm7"];
var enable_pm8 = sp.prefs["enable_pm8"];
var enable_pm9 = sp.prefs["enable_pm9"];
var enable_pm0 = sp.prefs["enable_pm0"];

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
function onPrefChange_enable_pm3() {
    enable_pm3 = sp.prefs["enable_pm3"];
    pm3_Hotkey = set_pm(enable_pm3, pm3_Hotkey, "control-shift-3", msg_pm3);
}
function onPrefChange_enable_pm4() {
    enable_pm4 = sp.prefs["enable_pm4"];
    pm4_Hotkey = set_pm(enable_pm4, pm4_Hotkey, "control-shift-4", msg_pm4);
}
function onPrefChange_enable_pm5() {
    enable_pm5 = sp.prefs["enable_pm5"];
    pm5_Hotkey = set_pm(enable_pm5, pm5_Hotkey, "control-shift-5", msg_pm5);
}
function onPrefChange_enable_pm6() {
    enable_pm6 = sp.prefs["enable_pm6"];
    pm6_Hotkey = set_pm(enable_pm6, pm6_Hotkey, "control-shift-6", msg_pm6);
}
function onPrefChange_enable_pm7() {
    enable_pm7 = sp.prefs["enable_pm7"];
    pm7_Hotkey = set_pm(enable_pm7, pm7_Hotkey, "control-shift-7", msg_pm7);
}
function onPrefChange_enable_pm8() {
    enable_pm8 = sp.prefs["enable_pm8"];
    pm8_Hotkey = set_pm(enable_pm8, pm8_Hotkey, "control-shift-8", msg_pm8);
}
function onPrefChange_enable_pm9() {
    enable_pm9 = sp.prefs["enable_pm9"];
    pm9_Hotkey = set_pm(enable_pm9, pm9_Hotkey, "control-shift-9", msg_pm9);
}
function onPrefChange_enable_pm0() {
    enable_pm0 = sp.prefs["enable_pm0"];
    pm0_Hotkey = set_pm(enable_pm0, pm0_Hotkey, "control-shift-0", msg_pm0);
}

// listen on prefs change
sp.on("pm3", onPrefChange);
sp.on("pm4", onPrefChange);
sp.on("pm5", onPrefChange);
sp.on("pm6", onPrefChange);
sp.on("pm7", onPrefChange);
sp.on("pm8", onPrefChange);
sp.on("pm9", onPrefChange);
sp.on("pm0", onPrefChange);
sp.on("enable_pm3", onPrefChange_enable_pm3);
sp.on("enable_pm4", onPrefChange_enable_pm4);
sp.on("enable_pm5", onPrefChange_enable_pm5);
sp.on("enable_pm6", onPrefChange_enable_pm6);
sp.on("enable_pm7", onPrefChange_enable_pm7);
sp.on("enable_pm8", onPrefChange_enable_pm8);
sp.on("enable_pm9", onPrefChange_enable_pm9);
sp.on("enable_pm0", onPrefChange_enable_pm0);

// load pageMode scripts
var pm = pageMod.PageMod({
    include: "*",
    contentScriptWhen: "start",
    contentScriptFile: self.data.url("perf_mark_hotkeys.js"),
});

var pm3_Hotkey, pm4_Hotkey, pm5_Hotkey, pm6_Hotkey, pm7_Hotkey, pm8_Hotkey, pm9_Hotkey, pm0_Hotkey;

function set_pm(enable_pref, hotkey_handler, combo_key, msg_pref) {
    if (enable_pref) {
        if(typeof(hotkey_handler) != "undefined" || hotkey_handler) {
            hotkey_handler.destroy();
        }
        hotkey_handler = Hotkey({
            combo: combo_key,
            onPress: function () {
                pm.port.emit("addPerfMark", msg_pref);
            }
        });
    } else {
        if(typeof(hotkey_handler) != "undefined" || hotkey_handler) {
            hotkey_handler.destroy();
        }
    }
    return hotkey_handler;
}

pm3_Hotkey = set_pm(enable_pm3, pm3_Hotkey, "control-shift-3", msg_pm3);
pm4_Hotkey = set_pm(enable_pm4, pm4_Hotkey, "control-shift-4", msg_pm4);
pm5_Hotkey = set_pm(enable_pm5, pm5_Hotkey, "control-shift-5", msg_pm5);
pm6_Hotkey = set_pm(enable_pm6, pm6_Hotkey, "control-shift-6", msg_pm6);
pm7_Hotkey = set_pm(enable_pm7, pm7_Hotkey, "control-shift-7", msg_pm7);
pm8_Hotkey = set_pm(enable_pm8, pm8_Hotkey, "control-shift-8", msg_pm8);
pm9_Hotkey = set_pm(enable_pm9, pm9_Hotkey, "control-shift-9", msg_pm9);
pm0_Hotkey = set_pm(enable_pm0, pm0_Hotkey, "control-shift-0", msg_pm0);
