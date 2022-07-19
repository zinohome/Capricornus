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
export const NAVIGATION_DIRECTION = {
  Left: -1,
  ArrowLeft: -1,
  Right: 1,
  ArrowRight: 1
};
/**
 * Button size.
 */

export let CONTENT_SWITCHER_SIZE;

(function (CONTENT_SWITCHER_SIZE) {
  CONTENT_SWITCHER_SIZE["REGULAR"] = "";
  CONTENT_SWITCHER_SIZE["SMALL"] = "sm";
  CONTENT_SWITCHER_SIZE["EXTRA_LARGE"] = "xl";
})(CONTENT_SWITCHER_SIZE || (CONTENT_SWITCHER_SIZE = {}));
//# sourceMappingURL=defs.js.map
