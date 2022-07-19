/**
 * @license
 *
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Button kinds.
 */
export let BUTTON_KIND;
/**
 * Button size.
 */

(function (BUTTON_KIND) {
  BUTTON_KIND["PRIMARY"] = "primary";
  BUTTON_KIND["SECONDARY"] = "secondary";
  BUTTON_KIND["TERTIARY"] = "tertiary";
  BUTTON_KIND["GHOST"] = "ghost";
  BUTTON_KIND["DANGER"] = "danger";
  BUTTON_KIND["DANGER_TERTIARY"] = "danger-tertiary";
  BUTTON_KIND["DANGER_GHOST"] = "danger-ghost";
})(BUTTON_KIND || (BUTTON_KIND = {}));

export let BUTTON_SIZE;
/**
 * Button icon layout.
 */

(function (BUTTON_SIZE) {
  BUTTON_SIZE["REGULAR"] = "";
  BUTTON_SIZE["SMALL"] = "sm";
  BUTTON_SIZE["EXTRA_LARGE"] = "xl";
  BUTTON_SIZE["FIELD"] = "field";
})(BUTTON_SIZE || (BUTTON_SIZE = {}));

export let BUTTON_ICON_LAYOUT;

(function (BUTTON_ICON_LAYOUT) {
  BUTTON_ICON_LAYOUT["REGULAR"] = "";
  BUTTON_ICON_LAYOUT["CONDENSED"] = "condensed";
})(BUTTON_ICON_LAYOUT || (BUTTON_ICON_LAYOUT = {}));
//# sourceMappingURL=defs.js.map
