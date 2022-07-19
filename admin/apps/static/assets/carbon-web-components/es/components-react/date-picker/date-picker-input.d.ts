/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component } from 'react';
export interface ComponentProps {
  /**
   * The color scheme.
   */
  colorScheme?: string;
  /**
   * `true` if the check box should be disabled.
   */

  /**
   * `true` if the check box should be disabled.
   */
  disabled?: boolean;
  /**
   * `true` if the label should be hidden.
   */

  /**
   * `true` if the label should be hidden.
   */
  hideLabel?: boolean;
  /**
   * Controls the invalid state and visibility of the `validityMessage`.
   */

  /**
   * Controls the invalid state and visibility of the `validityMessage`.
   */
  invalid?: boolean;
  /**
   * Date picker input kind.
   */

  /**
   * Date picker input kind.
   */
  kind?: string;
  /**
   * The label text.
   */

  /**
   * The label text.
   */
  labelText?: string;
  /**
   * The `pattern` attribute for the `<input>` in the shadow DOM.
   */

  /**
   * The `pattern` attribute for the `<input>` in the shadow DOM.
   */
  pattern?: string;
  /**
   * The placeholder text.
   */

  /**
   * The placeholder text.
   */
  placeholder?: string;
  /**
   * `true` if the value is required.
   */

  /**
   * `true` if the value is required.
   */
  required?: boolean;
  /**
   * The special validity message for `required`.
   */

  /**
   * The special validity message for `required`.
   */
  requiredValidityMessage?: string;
  /**
   * Vertical size of this date picker input.
   */

  /**
   * Vertical size of this date picker input.
   */
  size?: string;
  /**
   * Horizontal size of this date picker input.
   * Effective only when `kind` property is `DATE_PICKER_INPUT_KIND.SIMPLE`.
   */

  /**
   * Horizontal size of this date picker input.
   * Effective only when `kind` property is `DATE_PICKER_INPUT_KIND.SIMPLE`.
   */
  sizeHorizontal?: string;
  /**
   * The `type` attribute for the `<input>` in the shadow DOM.
   */

  /**
   * The `type` attribute for the `<input>` in the shadow DOM.
   */
  type?: string;
  /**
   * The validity message.
   * If present and non-empty, this date picker input shows the UI of its invalid state.
   */

  /**
   * The validity message.
   * If present and non-empty, this date picker input shows the UI of its invalid state.
   */
  validityMessage?: string;
  /**
   * The value.
   */

  /**
   * The value.
   */
  value?: string;
  [prop: string]: unknown;
}
/**
 * The input box for date picker.
 * @element bx-date-picker-input
 */

/**
 * The input box for date picker.
 * @element bx-date-picker-input
 */
declare class BXDatePickerInput extends Component<ComponentProps> {}

export default BXDatePickerInput;
