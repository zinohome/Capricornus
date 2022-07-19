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
   * The maximum value.
   */

  /**
   * The maximum value.
   */
  max?: number;
  /**
   * The minimum value.
   */

  /**
   * The minimum value.
   */
  min?: number;
  /**
   * The snapping step of the value.
   */

  /**
   * The snapping step of the value.
   */
  step?: number;
  /**
   * The type of the `<input>`.
   */

  /**
   * The type of the `<input>`.
   */
  type?: string;
  /**
   * The value.
   */

  /**
   * The value.
   */
  value?: number;
  /**
   * The event handler for the custom event fired after the value is changed by user gesture.
   */

  /**
   * The event handler for the custom event fired after the value is changed by user gesture.
   */
  onChange?: (event: CustomEvent) => void;
  [prop: string]: unknown;
}
/**
 * The `<input>` box for slider.
 * @element bx-slider-input
 * @fires bx-slider-input-changed - The custom event fired after the value is changed by user gesture.
 */

/**
 * The `<input>` box for slider.
 * @element bx-slider-input
 * @fires bx-slider-input-changed - The custom event fired after the value is changed by user gesture.
 */
declare class BXSliderInput extends Component<ComponentProps> {}

export default BXSliderInput;
