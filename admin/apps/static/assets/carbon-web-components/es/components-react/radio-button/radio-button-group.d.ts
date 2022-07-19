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
   * `true` if the check box should be disabled.
   */
  disabled?: boolean;
  /**
   * The label position.
   */

  /**
   * The label position.
   */
  labelPosition?: string;
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
   * The event handler for the custom event fired after this radio button group changes its selected item.
   */

  /**
   * The event handler for the custom event fired after this radio button group changes its selected item.
   */
  onChange?: (event: CustomEvent) => void;
  /**
   * The event handler for the custom event fired after a radio button changes its checked state.
   */

  /**
   * The event handler for the custom event fired after a radio button changes its checked state.
   */
  onChangeRadioButton?: (event: CustomEvent) => void;
  [prop: string]: unknown;
}
/**
 * Radio button group.
 * @element bx-radio-button-group
 * @fires bx-radio-button-group-changed - The custom event fired after this radio button group changes its selected item.
 */

/**
 * Radio button group.
 * @element bx-radio-button-group
 * @fires bx-radio-button-group-changed - The custom event fired after this radio button group changes its selected item.
 */
declare class BXRadioButtonGroup extends Component<ComponentProps> {}

export default BXRadioButtonGroup;
