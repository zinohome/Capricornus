"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "DATE_PICKER_INPUT_COLOR_SCHEME", {
  enumerable: true,
  get: function () {
    return _sharedEnums.FORM_ELEMENT_COLOR_SCHEME;
  }
});
exports.DATE_PICKER_INPUT_SIZE_HORIZONTAL = exports.DATE_PICKER_INPUT_KIND = void 0;

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
 * Date picker input kinds.
 */
let DATE_PICKER_INPUT_KIND;
/**
 * Horizontal size, applicable only to the simple variant.
 */

exports.DATE_PICKER_INPUT_KIND = DATE_PICKER_INPUT_KIND;

(function (DATE_PICKER_INPUT_KIND) {
  DATE_PICKER_INPUT_KIND["SIMPLE"] = "simple";
  DATE_PICKER_INPUT_KIND["SINGLE"] = "single";
  DATE_PICKER_INPUT_KIND["FROM"] = "from";
  DATE_PICKER_INPUT_KIND["TO"] = "to";
})(DATE_PICKER_INPUT_KIND || (exports.DATE_PICKER_INPUT_KIND = DATE_PICKER_INPUT_KIND = {}));

let DATE_PICKER_INPUT_SIZE_HORIZONTAL;
exports.DATE_PICKER_INPUT_SIZE_HORIZONTAL = DATE_PICKER_INPUT_SIZE_HORIZONTAL;

(function (DATE_PICKER_INPUT_SIZE_HORIZONTAL) {
  DATE_PICKER_INPUT_SIZE_HORIZONTAL["REGULAR"] = "";
  DATE_PICKER_INPUT_SIZE_HORIZONTAL["SHORT"] = "short";
})(DATE_PICKER_INPUT_SIZE_HORIZONTAL || (exports.DATE_PICKER_INPUT_SIZE_HORIZONTAL = DATE_PICKER_INPUT_SIZE_HORIZONTAL = {}));
//# sourceMappingURL=defs.js.map
