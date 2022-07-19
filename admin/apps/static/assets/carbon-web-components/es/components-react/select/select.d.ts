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
   * Sets the select to be focussed automatically on page load. Defaults to false
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
   * Controls the disabled state of the select
   */

  /**
   * Controls the disabled state of the select
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
   * ID to link the `label` and `select`
   */

  /**
   * ID to link the `label` and `select`
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
   * `true` to enable multiple selection.
   */

  /**
   * `true` to enable multiple selection.
   */
  multiple?: boolean;
  /**
   * Name for the select in the `FormData`
   */

  /**
   * Name for the select in the `FormData`
   */
  name?: string;
  /**
   * Pattern to validate the select against for HTML validity checking
   */

  /**
   * Pattern to validate the select against for HTML validity checking
   */
  pattern?: string;
  /**
   * Value to display when the select has an empty `value`
   */

  /**
   * Value to display when the select has an empty `value`
   */
  placeholder?: string;
  /**
   * Controls the readonly state of the select
   */

  /**
   * Controls the readonly state of the select
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
   * The selected index.
   */

  /**
   * The selected index.
   */
  selectedIndex?: number;
  /**
   * The input box size.
   */

  /**
   * The input box size.
   */
  size?: string;
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
  /**
   * The event handler for the custom event fired after item is selected.
   */

  /**
   * The event handler for the custom event fired after item is selected.
   */
  onSelect?: (event: CustomEvent) => void;
  [prop: string]: unknown;
}
/**
 * Select box.
 * @element bx-select
 * @slot helper-text - The helper text.
 * @slot label-text - The label text.
 * @slot validity-message - The validity message. If present and non-empty, this input shows the UI of its invalid state.
 */

/**
 * Select box.
 * @element bx-select
 * @slot helper-text - The helper text.
 * @slot label-text - The label text.
 * @slot validity-message - The validity message. If present and non-empty, this input shows the UI of its invalid state.
 */
declare class BXSelect extends Component<ComponentProps> {}

export default BXSelect;
