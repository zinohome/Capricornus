/**
 * @license
 *
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Collapse modes of side nav.
 */
export let SIDE_NAV_COLLAPSE_MODE;
/**
 * The usage purpose of side nav.
 */

(function (SIDE_NAV_COLLAPSE_MODE) {
  SIDE_NAV_COLLAPSE_MODE["FIXED"] = "fixed";
  SIDE_NAV_COLLAPSE_MODE["RAIL"] = "rail";
  SIDE_NAV_COLLAPSE_MODE["RESPONSIVE"] = "responsive";
})(SIDE_NAV_COLLAPSE_MODE || (SIDE_NAV_COLLAPSE_MODE = {}));

export let SIDE_NAV_USAGE_MODE;

(function (SIDE_NAV_USAGE_MODE) {
  SIDE_NAV_USAGE_MODE["REGULAR"] = "";
  SIDE_NAV_USAGE_MODE["HEADER_NAV"] = "header-nav";
})(SIDE_NAV_USAGE_MODE || (SIDE_NAV_USAGE_MODE = {}));
//# sourceMappingURL=defs.js.map
