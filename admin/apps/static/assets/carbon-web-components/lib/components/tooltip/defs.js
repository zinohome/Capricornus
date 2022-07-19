"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TOOLTIP_DIRECTION = exports.TOOLTIP_ALIGNMENT = void 0;

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
let TOOLTIP_ALIGNMENT;
/**
 * The direction/positioning/orientation choices of tooltip.
 */

exports.TOOLTIP_ALIGNMENT = TOOLTIP_ALIGNMENT;

(function (TOOLTIP_ALIGNMENT) {
  TOOLTIP_ALIGNMENT["START"] = "start";
  TOOLTIP_ALIGNMENT["CENTER"] = "center";
  TOOLTIP_ALIGNMENT["END"] = "end";
})(TOOLTIP_ALIGNMENT || (exports.TOOLTIP_ALIGNMENT = TOOLTIP_ALIGNMENT = {}));

let TOOLTIP_DIRECTION;
exports.TOOLTIP_DIRECTION = TOOLTIP_DIRECTION;

(function (TOOLTIP_DIRECTION) {
  TOOLTIP_DIRECTION["LEFT"] = "left";
  TOOLTIP_DIRECTION["TOP"] = "top";
  TOOLTIP_DIRECTION["RIGHT"] = "right";
  TOOLTIP_DIRECTION["BOTTOM"] = "bottom";
})(TOOLTIP_DIRECTION || (exports.TOOLTIP_DIRECTION = TOOLTIP_DIRECTION = {}));
//# sourceMappingURL=defs.js.map
