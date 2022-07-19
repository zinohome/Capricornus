"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TAG_TYPE = exports.TAG_SIZE = void 0;

/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Tag size.
 */
let TAG_SIZE;
exports.TAG_SIZE = TAG_SIZE;

(function (TAG_SIZE) {
  TAG_SIZE["REGULAR"] = "";
  TAG_SIZE["SMALL"] = "sm";
})(TAG_SIZE || (exports.TAG_SIZE = TAG_SIZE = {}));

let TAG_TYPE;
exports.TAG_TYPE = TAG_TYPE;

(function (TAG_TYPE) {
  TAG_TYPE["RED"] = "red";
  TAG_TYPE["MAGENTA"] = "magenta";
  TAG_TYPE["PURPLE"] = "purple";
  TAG_TYPE["BLUE"] = "blue";
  TAG_TYPE["CYAN"] = "cyan";
  TAG_TYPE["TEAL"] = "teal";
  TAG_TYPE["GREEN"] = "green";
  TAG_TYPE["GRAY"] = "gray";
  TAG_TYPE["COOL-GRAY"] = "cool-gray";
  TAG_TYPE["WARM-GRAY"] = "warm-gray";
})(TAG_TYPE || (exports.TAG_TYPE = TAG_TYPE = {}));
//# sourceMappingURL=defs.js.map
