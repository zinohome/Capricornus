/**
 * @license
 *
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { FORM_ELEMENT_COLOR_SCHEME as INPUT_COLOR_SCHEME } from '../../globals/shared-enums';
/**
 * Input size.
 */

export let INPUT_SIZE;
/**
 * Supported input types.
 *
 * For this component we only support textual types
 */

(function (INPUT_SIZE) {
  INPUT_SIZE["SMALL"] = "sm";
  INPUT_SIZE["REGULAR"] = "lg";
  INPUT_SIZE["LARGE"] = "lg";
  INPUT_SIZE["EXTRA_LARGE"] = "xl";
})(INPUT_SIZE || (INPUT_SIZE = {}));

export let INPUT_TYPE;

(function (INPUT_TYPE) {
  INPUT_TYPE["EMAIL"] = "email";
  INPUT_TYPE["PASSWORD"] = "password";
  INPUT_TYPE["TEL"] = "tel";
  INPUT_TYPE["TEXT"] = "text";
  INPUT_TYPE["URL"] = "url";
})(INPUT_TYPE || (INPUT_TYPE = {}));
//# sourceMappingURL=defs.js.map
