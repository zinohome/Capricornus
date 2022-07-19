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
   * `true` if the check box should be checked.
   */
  checked?: boolean;
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
   * `true` if the check box should show its UI of the indeterminate state.
   */

  /**
   * `true` if the check box should show its UI of the indeterminate state.
   */
  indeterminate?: boolean;
  /**
   * The label text.
   */

  /**
   * The label text.
   */
  labelText?: string;
  /**
   * The form name.
   */

  /**
   * The form name.
   */
  name?: string;
  /**
   * The value.
   */

  /**
   * The value.
   */
  value?: string;
  /**
   * The event handler for the custom event fired after this changebox changes its checked state.
   */

  /**
   * The event handler for the custom event fired after this changebox changes its checked state.
   */
  onChange?: (event: CustomEvent) => void;
  [prop: string]: unknown;
}
/**
 * Check box.
 * @element bx-checkbox
 * @fires bx-checkbox-changed - The custom event fired after this changebox changes its checked state.
 * @csspart input The checkbox.
 * @csspart label The label.
 */

/**
 * Check box.
 * @element bx-checkbox
 * @fires bx-checkbox-changed - The custom event fired after this changebox changes its checked state.
 * @csspart input The checkbox.
 * @csspart label The label.
 */
declare class BXCheckbox extends Component<ComponentProps> {}

export default BXCheckbox;
