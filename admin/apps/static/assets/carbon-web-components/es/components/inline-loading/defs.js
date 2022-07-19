/**
 * @license
 *
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Loading state for inline loading spinner.
 */
export let INLINE_LOADING_STATE;

(function (INLINE_LOADING_STATE) {
  INLINE_LOADING_STATE["INACTIVE"] = "inactive";
  INLINE_LOADING_STATE["ACTIVE"] = "active";
  INLINE_LOADING_STATE["FINISHED"] = "finished";
  INLINE_LOADING_STATE["ERROR"] = "error";
})(INLINE_LOADING_STATE || (INLINE_LOADING_STATE = {}));
//# sourceMappingURL=defs.js.map
