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
   * Sets the input to be focussed automatically on page load. Defaults to false
   */

  /**
   * Sets the input to be focussed automatically on page load. Defaults to false
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
   * Controls the disabled state of the input
   */

  /**
   * Controls the disabled state of the input
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
   * Name for the input in the `FormData`
   */

  /**
   * Name for the input in the `FormData`
   */
  name?: string;
  /**
   * Pattern to validate the input against for HTML validity checking
   */

  /**
   * Pattern to validate the input against for HTML validity checking
   */
  pattern?: string;
  /**
   * Value to display when the input has an empty `value`
   */

  /**
   * Value to display when the input has an empty `value`
   */
  placeholder?: string;
  /**
   * Controls the readonly state of the input
   */

  /**
   * Controls the readonly state of the input
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
   * The input box size.
   */

  /**
   * The input box size.
   */
  size?: string;
  /**
   * The type of the input. Can be one of the types listed in the INPUT_TYPE enum
   */

  /**
   * The type of the input. Can be one of the types listed in the INPUT_TYPE enum
   */
  type?: string;
  /**
   * The validity message. If present and non-empty, this input shows the UI of its invalid state.
   */

  /**
   * The validity message. If present and non-empty, this input shows the UI of its invalid state.
   */
  validityMessage?: string;
  /**
   * The value of the input.
   */

  /**
   * The value of the input.
   */
  value?: string;
  [prop: string]: unknown;
}
/**
 * Input element. Supports all the usual attributes for textual input types
 * @element bx-input
 * @slot helper-text - The helper text.
 * @slot label-text - The label text.
 * @slot validity-message - The validity message. If present and non-empty, this input shows the UI of its invalid state.
 */

/**
 * Input element. Supports all the usual attributes for textual input types
 * @element bx-input
 * @slot helper-text - The helper text.
 * @slot label-text - The label text.
 * @slot validity-message - The validity message. If present and non-empty, this input shows the UI of its invalid state.
 */
declare class BXInput extends Component<ComponentProps> {}

export default BXInput;
