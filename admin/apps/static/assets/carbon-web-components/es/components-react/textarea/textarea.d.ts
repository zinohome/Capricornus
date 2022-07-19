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
   * May be any of the standard HTML autocomplete options
   */
  autocomplete?: string;
  /**
   * Sets the textarea to be focussed automatically on page load. Defaults to false
   */

  /**
   * Sets the textarea to be focussed automatically on page load. Defaults to false
   */
  autofocus?: boolean;
  /**
   * The color scheme.
   */

  /**
   * The color scheme.
   */
  colorScheme?: string;
  /**
   * The number of columns for the textarea to show by default
   */

  /**
   * The number of columns for the textarea to show by default
   */
  cols?: string;
  /**
   * Controls the disabled state of the textarea
   */

  /**
   * Controls the disabled state of the textarea
   */
  disabled?: boolean;
  /**
   * The helper text.
   */

  /**
   * The helper text.
   */
  helperText?: string;
  /**
   * ID to link the `label` and `textarea`
   */

  /**
   * ID to link the `label` and `textarea`
   */
  id?: string;
  /**
   * Controls the invalid state and visibility of the `validityMessage`
   */

  /**
   * Controls the invalid state and visibility of the `validityMessage`
   */
  invalid?: boolean;
  /**
   * The label text.
   */

  /**
   * The label text.
   */
  labelText?: string;
  /**
   * Name for the textarea in the `FormData`
   */

  /**
   * Name for the textarea in the `FormData`
   */
  name?: string;
  /**
   * Pattern to validate the textarea against for HTML validity checking
   */

  /**
   * Pattern to validate the textarea against for HTML validity checking
   */
  pattern?: string;
  /**
   * Value to display when the textarea has an empty `value`
   */

  /**
   * Value to display when the textarea has an empty `value`
   */
  placeholder?: string;
  /**
   * Controls the readonly state of the textarea
   */

  /**
   * Controls the readonly state of the textarea
   */
  readonly?: boolean;
  /**
   * Boolean property to set the required status
   */

  /**
   * Boolean property to set the required status
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
   * The number of rows for the textarea to show by default
   */

  /**
   * The number of rows for the textarea to show by default
   */
  rows?: string;
  /**
   * The validity message.
   */

  /**
   * The validity message.
   */
  validityMessage?: string;
  /**
   * The value of the text area.
   */

  /**
   * The value of the text area.
   */
  value?: string;
  [prop: string]: unknown;
}
/**
 * Text area.
 * @element bx-textarea
 * @slot helper-text - The helper text.
 * @slot label-text - The label text.
 * @slot validity-message - The validity message. If present and non-empty, this input shows the UI of its invalid state.
 */

/**
 * Text area.
 * @element bx-textarea
 * @slot helper-text - The helper text.
 * @slot label-text - The label text.
 * @slot validity-message - The validity message. If present and non-empty, this input shows the UI of its invalid state.
 */
declare class BXTextarea extends Component<ComponentProps> {}

export default BXTextarea;
