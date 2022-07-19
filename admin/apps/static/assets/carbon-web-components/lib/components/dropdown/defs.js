"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "DROPDOWN_COLOR_SCHEME", {
  enumerable: true,
  get: function () {
    return _sharedEnums.FORM_ELEMENT_COLOR_SCHEME;
  }
});
exports.NAVIGATION_DIRECTION = exports.DROPDOWN_TYPE = exports.DROPDOWN_SIZE = exports.DROPDOWN_KEYBOARD_ACTION = void 0;

var _sharedEnums = require("../../globals/shared-enums");

/**
 * @license
 *
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Navigation direction, associated with key symbols.
 */
const NAVIGATION_DIRECTION = {
  Up: -1,
  ArrowUp: -1,
  Down: 1,
  ArrowDown: 1
};
/**
 * The keyboard action categories for dropdown.
 */

exports.NAVIGATION_DIRECTION = NAVIGATION_DIRECTION;
let DROPDOWN_KEYBOARD_ACTION;
/**
 * Dropdown size.
 */

exports.DROPDOWN_KEYBOARD_ACTION = DROPDOWN_KEYBOARD_ACTION;

(function (DROPDOWN_KEYBOARD_ACTION) {
  DROPDOWN_KEYBOARD_ACTION["NONE"] = "none";
  DROPDOWN_KEYBOARD_ACTION["CLOSING"] = "closing";
  DROPDOWN_KEYBOARD_ACTION["NAVIGATING"] = "navigating";
  DROPDOWN_KEYBOARD_ACTION["TRIGGERING"] = "triggering";
})(DROPDOWN_KEYBOARD_ACTION || (exports.DROPDOWN_KEYBOARD_ACTION = DROPDOWN_KEYBOARD_ACTION = {}));

let DROPDOWN_SIZE;
/**
 * Dropdown types.
 */

exports.DROPDOWN_SIZE = DROPDOWN_SIZE;

(function (DROPDOWN_SIZE) {
  DROPDOWN_SIZE["REGULAR"] = "";
  DROPDOWN_SIZE["SMALL"] = "sm";
  DROPDOWN_SIZE["EXTRA_LARGE"] = "xl";
})(DROPDOWN_SIZE || (exports.DROPDOWN_SIZE = DROPDOWN_SIZE = {}));

let DROPDOWN_TYPE;
exports.DROPDOWN_TYPE = DROPDOWN_TYPE;

(function (DROPDOWN_TYPE) {
  DROPDOWN_TYPE["REGULAR"] = "";
  DROPDOWN_TYPE["INLINE"] = "inline";
})(DROPDOWN_TYPE || (exports.DROPDOWN_TYPE = DROPDOWN_TYPE = {}));
//# sourceMappingURL=defs.js.map
