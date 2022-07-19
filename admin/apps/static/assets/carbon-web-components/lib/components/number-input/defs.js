"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "NUMBER_INPUT_COLOR_SCHEME", {
  enumerable: true,
  get: function () {
    return _sharedEnums.FORM_ELEMENT_COLOR_SCHEME;
  }
});
exports.NUMBER_INPUT_VALIDATION_STATUS = void 0;

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
 * Works in conjunction with VALIDATION_STATUS
 */
let NUMBER_INPUT_VALIDATION_STATUS;
exports.NUMBER_INPUT_VALIDATION_STATUS = NUMBER_INPUT_VALIDATION_STATUS;

(function (NUMBER_INPUT_VALIDATION_STATUS) {
  NUMBER_INPUT_VALIDATION_STATUS["EXCEEDED_MAXIMUM"] = "exceeded_maximum";
  NUMBER_INPUT_VALIDATION_STATUS["EXCEEDED_MINIMUM"] = "exceeded_minimum";
})(NUMBER_INPUT_VALIDATION_STATUS || (exports.NUMBER_INPUT_VALIDATION_STATUS = NUMBER_INPUT_VALIDATION_STATUS = {}));
//# sourceMappingURL=defs.js.map
