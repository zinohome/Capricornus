"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NAVIGATION_DIRECTION_NARROW = void 0;
Object.defineProperty(exports, "TABS_COLOR_SCHEME", {
  enumerable: true,
  get: function () {
    return _sharedEnums.FORM_ELEMENT_COLOR_SCHEME;
  }
});
exports.TABS_TYPE = exports.TABS_KEYBOARD_ACTION = void 0;

var _sharedEnums = require("../../globals/shared-enums");

/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Navigation direction for narrow mode, associated with key symbols.
 */
const NAVIGATION_DIRECTION_NARROW = {
  Up: -1,
  ArrowUp: -1,
  Down: 1,
  ArrowDown: 1
};
/**
 * The keyboard action categories for dropdown.
 */

exports.NAVIGATION_DIRECTION_NARROW = NAVIGATION_DIRECTION_NARROW;
let TABS_KEYBOARD_ACTION;
/**
 * Tabs types.
 */

exports.TABS_KEYBOARD_ACTION = TABS_KEYBOARD_ACTION;

(function (TABS_KEYBOARD_ACTION) {
  TABS_KEYBOARD_ACTION["NONE"] = "none";
  TABS_KEYBOARD_ACTION["CLOSING"] = "closing";
  TABS_KEYBOARD_ACTION["NAVIGATING"] = "navigating";
  TABS_KEYBOARD_ACTION["TRIGGERING"] = "triggering";
})(TABS_KEYBOARD_ACTION || (exports.TABS_KEYBOARD_ACTION = TABS_KEYBOARD_ACTION = {}));

let TABS_TYPE;
exports.TABS_TYPE = TABS_TYPE;

(function (TABS_TYPE) {
  TABS_TYPE["REGULAR"] = "";
  TABS_TYPE["CONTAINER"] = "container";
})(TABS_TYPE || (exports.TABS_TYPE = TABS_TYPE = {}));
//# sourceMappingURL=defs.js.map
