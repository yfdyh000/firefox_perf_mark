/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, you can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * Created by Askeing on 2016/5/3.
 */

"use strict";

self.port.on("addPerfMark", function(msg) {
    performance.mark(msg);
});
