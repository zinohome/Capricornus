/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component } from 'react';
import { ComponentProps as ParentComponentProps } from '../input/input';
export interface ComponentProps extends ParentComponentProps {
  /**
   * The color scheme.
   */
  colorScheme?: string;
  /**
   * The minimum value allowed in the input
   */

  /**
   * The minimum value allowed in the input
   */
  min?: string;
  /**
   * The maximum value allowed in the input
   */

  /**
   * The maximum value allowed in the input
   */
  max?: string;
  /**
   * The amount the value should increase or decrease by
   */

  /**
   * The amount the value should increase or decrease by
   */
  step?: string;
  /**
   * Set to `true` to enable the mobile variant of the number input
   */

  /**
   * Set to `true` to enable the mobile variant of the number input
   */
  mobile?: boolean;
  /**
   * Aria text for the button that increments the value
   */

  /**
   * Aria text for the button that increments the value
   */
  incrementButtonAssistiveText?: string;
  /**
   * Aria text for the button that decrements the value
   */

  /**
   * Aria text for the button that decrements the value
   */
  decrementButtonAssistiveText?: string;
  /**
   * The input box size.
   */

  /**
   * The input box size.
   */
  size?: string;
  /**
   * The validity message shown when the value is greater than the maximum
   *
   * Also available via the `validity-message-max` slot
   */

  /**
   * The validity message shown when the value is greater than the maximum
   *
   * Also available via the `validity-message-max` slot
   */
  validityMessageMax?: string;
  /**
   * The validity message shown when the value is less than the minimum
   *
   * Also available via the `validity-message-min` slot
   */

  /**
   * The validity message shown when the value is less than the minimum
   *
   * Also available via the `validity-message-min` slot
   */
  validityMessageMin?: string;
  /**
   * The event handler for the custom event fired after the value is changed upon a user gesture.
   */

  /**
   * The event handler for the custom event fired after the value is changed upon a user gesture.
   */
  onInput?: (event: CustomEvent) => void;
}
/**
 * Number input.
 * @element bx-number-input
 * @slot helper-text - The helper text.
 * @slot label-text - The label text.
 * @slot validity-message - The validity message. If present and non-empty, this input shows the UI of its invalid state.
 */

/**
 * Number input.
 * @element bx-number-input
 * @slot helper-text - The helper text.
 * @slot label-text - The label text.
 * @slot validity-message - The validity message. If present and non-empty, this input shows the UI of its invalid state.
 */
declare class BXNumberInput extends Component<ComponentProps> {}

export default BXNumberInput;
