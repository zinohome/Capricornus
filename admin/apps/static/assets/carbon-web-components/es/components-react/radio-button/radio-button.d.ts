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
   * `true` if this radio button should be checked.
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
   * The label position.
   */

  /**
   * The label position.
   */
  labelPosition?: string;
  /**
   * The label text.
   */

  /**
   * The label text.
   */
  labelText?: string;
  /**
   * The `name` attribute for the `<input>` for selection.
   */

  /**
   * The `name` attribute for the `<input>` for selection.
   */
  name?: string;
  /**
   * The orientation to lay out radio buttons.
   */

  /**
   * The orientation to lay out radio buttons.
   */
  orientation?: string;
  /**
   * The `value` attribute for the `<input>` for selection.
   */

  /**
   * The `value` attribute for the `<input>` for selection.
   */
  value?: string;
  /**
   * The event handler for the custom event fired after this radio button changes its checked state.
   */

  /**
   * The event handler for the custom event fired after this radio button changes its checked state.
   */
  onChange?: (event: CustomEvent) => void;
  [prop: string]: unknown;
}
/**
 * Radio button.
 * @element bx-radio-button
 * @fires bx-radio-button-changed - The custom event fired after this radio button changes its checked state.
 */

/**
 * Radio button.
 * @element bx-radio-button
 * @fires bx-radio-button-changed - The custom event fired after this radio button changes its checked state.
 */
declare class BXRadioButton extends Component<ComponentProps> {}

export default BXRadioButton;
