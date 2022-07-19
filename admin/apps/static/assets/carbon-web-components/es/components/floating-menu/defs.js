/**
 * @license
 *
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * The LTR/RTL direction used for positioning floating menu.
 */
export let FLOATING_MENU_POSITION_DIRECTION;
/**
 * The alignment choices of floating menu.
 */

(function (FLOATING_MENU_POSITION_DIRECTION) {
  FLOATING_MENU_POSITION_DIRECTION["LTR"] = "ltr";
  FLOATING_MENU_POSITION_DIRECTION["RTL"] = "rtl";
})(FLOATING_MENU_POSITION_DIRECTION || (FLOATING_MENU_POSITION_DIRECTION = {}));

export let FLOATING_MENU_ALIGNMENT;
/**
 * The direction/positioning/orientation choices of floating menu.
 */

(function (FLOATING_MENU_ALIGNMENT) {
  FLOATING_MENU_ALIGNMENT["START"] = "start";
  FLOATING_MENU_ALIGNMENT["CENTER"] = "center";
  FLOATING_MENU_ALIGNMENT["END"] = "end";
})(FLOATING_MENU_ALIGNMENT || (FLOATING_MENU_ALIGNMENT = {}));

export let FLOATING_MENU_DIRECTION;
/**
 * The group of the direction/positioning/orientation choices of floating menu.
 */

(function (FLOATING_MENU_DIRECTION) {
  FLOATING_MENU_DIRECTION["LEFT"] = "left";
  FLOATING_MENU_DIRECTION["TOP"] = "top";
  FLOATING_MENU_DIRECTION["RIGHT"] = "right";
  FLOATING_MENU_DIRECTION["BOTTOM"] = "bottom";
})(FLOATING_MENU_DIRECTION || (FLOATING_MENU_DIRECTION = {}));

export let FLOATING_MENU_DIRECTION_GROUP;

(function (FLOATING_MENU_DIRECTION_GROUP) {
  FLOATING_MENU_DIRECTION_GROUP["HORIZONTAL"] = "horizontal";
  FLOATING_MENU_DIRECTION_GROUP["VERTICAL"] = "vertical";
})(FLOATING_MENU_DIRECTION_GROUP || (FLOATING_MENU_DIRECTION_GROUP = {}));
//# sourceMappingURL=defs.js.map
