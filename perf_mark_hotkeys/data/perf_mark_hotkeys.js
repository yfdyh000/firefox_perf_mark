/**
 * Created by Askeing on 2016/5/3.
 */

"use strict";

self.port.on("addPerfMark", function(msg) {
    console.log("get pm" + msg);
    performance.mark(msg);
});
