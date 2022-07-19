/**
 * @license
 *
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { FORM_ELEMENT_COLOR_SCHEME as NUMBER_INPUT_COLOR_SCHEME } from '../../globals/shared-enums';
/**
 * Works in conjunction with VALIDATION_STATUS
 */

export let NUMBER_INPUT_VALIDATION_STATUS;

(function (NUMBER_INPUT_VALIDATION_STATUS) {
  NUMBER_INPUT_VALIDATION_STATUS["EXCEEDED_MAXIMUM"] = "exceeded_maximum";
  NUMBER_INPUT_VALIDATION_STATUS["EXCEEDED_MINIMUM"] = "exceeded_minimum";
})(NUMBER_INPUT_VALIDATION_STATUS || (NUMBER_INPUT_VALIDATION_STATUS = {}));
//# sourceMappingURL=defs.js.map
