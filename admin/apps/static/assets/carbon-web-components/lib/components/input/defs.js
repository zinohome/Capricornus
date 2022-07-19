"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "INPUT_COLOR_SCHEME", {
  enumerable: true,
  get: function () {
    return _sharedEnums.FORM_ELEMENT_COLOR_SCHEME;
  }
});
exports.INPUT_TYPE = exports.INPUT_SIZE = void 0;

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
 * Input size.
 */
let INPUT_SIZE;
/**
 * Supported input types.
 *
 * For this component we only support textual types
 */

exports.INPUT_SIZE = INPUT_SIZE;

(function (INPUT_SIZE) {
  INPUT_SIZE["SMALL"] = "sm";
  INPUT_SIZE["REGULAR"] = "lg";
  INPUT_SIZE["LARGE"] = "lg";
  INPUT_SIZE["EXTRA_LARGE"] = "xl";
})(INPUT_SIZE || (exports.INPUT_SIZE = INPUT_SIZE = {}));

let INPUT_TYPE;
exports.INPUT_TYPE = INPUT_TYPE;

(function (INPUT_TYPE) {
  INPUT_TYPE["EMAIL"] = "email";
  INPUT_TYPE["PASSWORD"] = "password";
  INPUT_TYPE["TEL"] = "tel";
  INPUT_TYPE["TEXT"] = "text";
  INPUT_TYPE["URL"] = "url";
})(INPUT_TYPE || (exports.INPUT_TYPE = INPUT_TYPE = {}));
//# sourceMappingURL=defs.js.map
