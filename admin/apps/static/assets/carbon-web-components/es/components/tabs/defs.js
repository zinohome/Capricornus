/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { FORM_ELEMENT_COLOR_SCHEME as TABS_COLOR_SCHEME } from '../../globals/shared-enums';
/**
 * Navigation direction for narrow mode, associated with key symbols.
 */

export const NAVIGATION_DIRECTION_NARROW = {
  Up: -1,
  ArrowUp: -1,
  Down: 1,
  ArrowDown: 1
};
/**
 * The keyboard action categories for dropdown.
 */

export let TABS_KEYBOARD_ACTION;
/**
 * Tabs types.
 */

(function (TABS_KEYBOARD_ACTION) {
  TABS_KEYBOARD_ACTION["NONE"] = "none";
  TABS_KEYBOARD_ACTION["CLOSING"] = "closing";
  TABS_KEYBOARD_ACTION["NAVIGATING"] = "navigating";
  TABS_KEYBOARD_ACTION["TRIGGERING"] = "triggering";
})(TABS_KEYBOARD_ACTION || (TABS_KEYBOARD_ACTION = {}));

export let TABS_TYPE;

(function (TABS_TYPE) {
  TABS_TYPE["REGULAR"] = "";
  TABS_TYPE["CONTAINER"] = "container";
})(TABS_TYPE || (TABS_TYPE = {}));
//# sourceMappingURL=defs.js.map
