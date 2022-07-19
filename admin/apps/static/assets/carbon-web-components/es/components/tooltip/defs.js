/**
 * @license
 *
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * The alignment choices of tooltip.
 */
export let TOOLTIP_ALIGNMENT;
/**
 * The direction/positioning/orientation choices of tooltip.
 */

(function (TOOLTIP_ALIGNMENT) {
  TOOLTIP_ALIGNMENT["START"] = "start";
  TOOLTIP_ALIGNMENT["CENTER"] = "center";
  TOOLTIP_ALIGNMENT["END"] = "end";
})(TOOLTIP_ALIGNMENT || (TOOLTIP_ALIGNMENT = {}));

export let TOOLTIP_DIRECTION;

(function (TOOLTIP_DIRECTION) {
  TOOLTIP_DIRECTION["LEFT"] = "left";
  TOOLTIP_DIRECTION["TOP"] = "top";
  TOOLTIP_DIRECTION["RIGHT"] = "right";
  TOOLTIP_DIRECTION["BOTTOM"] = "bottom";
})(TOOLTIP_DIRECTION || (TOOLTIP_DIRECTION = {}));
//# sourceMappingURL=defs.js.map
