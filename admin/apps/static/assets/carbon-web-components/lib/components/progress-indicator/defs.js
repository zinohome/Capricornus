"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PROGRESS_STEP_STAT = void 0;

/**
 * @license
 *
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * State of progress step.
 */
let PROGRESS_STEP_STAT;
exports.PROGRESS_STEP_STAT = PROGRESS_STEP_STAT;

(function (PROGRESS_STEP_STAT) {
  PROGRESS_STEP_STAT["QUEUED"] = "queued";
  PROGRESS_STEP_STAT["CURRENT"] = "current";
  PROGRESS_STEP_STAT["COMPLETE"] = "complete";
  PROGRESS_STEP_STAT["INVALID"] = "invalid";
})(PROGRESS_STEP_STAT || (exports.PROGRESS_STEP_STAT = PROGRESS_STEP_STAT = {}));
//# sourceMappingURL=defs.js.map
