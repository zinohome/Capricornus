"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NOTIFICATION_TYPE = exports.NOTIFICATION_KIND = void 0;

/**
 * @license
 *
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Notification kinds.
 */
let NOTIFICATION_KIND;
/**
 * Notification types.
 */

exports.NOTIFICATION_KIND = NOTIFICATION_KIND;

(function (NOTIFICATION_KIND) {
  NOTIFICATION_KIND["SUCCESS"] = "success";
  NOTIFICATION_KIND["INFO"] = "info";
  NOTIFICATION_KIND["WARNING"] = "warning";
  NOTIFICATION_KIND["ERROR"] = "error";
})(NOTIFICATION_KIND || (exports.NOTIFICATION_KIND = NOTIFICATION_KIND = {}));

let NOTIFICATION_TYPE;
exports.NOTIFICATION_TYPE = NOTIFICATION_TYPE;

(function (NOTIFICATION_TYPE) {
  NOTIFICATION_TYPE["INLINE"] = "inline";
  NOTIFICATION_TYPE["TOAST"] = "toast";
})(NOTIFICATION_TYPE || (exports.NOTIFICATION_TYPE = NOTIFICATION_TYPE = {}));
//# sourceMappingURL=defs.js.map
