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
export let NOTIFICATION_KIND;
/**
 * Notification types.
 */

(function (NOTIFICATION_KIND) {
  NOTIFICATION_KIND["SUCCESS"] = "success";
  NOTIFICATION_KIND["INFO"] = "info";
  NOTIFICATION_KIND["WARNING"] = "warning";
  NOTIFICATION_KIND["ERROR"] = "error";
})(NOTIFICATION_KIND || (NOTIFICATION_KIND = {}));

export let NOTIFICATION_TYPE;

(function (NOTIFICATION_TYPE) {
  NOTIFICATION_TYPE["INLINE"] = "inline";
  NOTIFICATION_TYPE["TOAST"] = "toast";
})(NOTIFICATION_TYPE || (NOTIFICATION_TYPE = {}));
//# sourceMappingURL=defs.js.map
