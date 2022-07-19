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
   * The formatter for the text for maximum value.
   * Should be changed upon the locale the UI is rendered with.
   */

  /**
   * The formatter for the text for maximum value.
   * Should be changed upon the locale the UI is rendered with.
   */
  formatMaxText?: string;
  /**
   * The formatter for the text for minimum value.
   * Should be changed upon the locale the UI is rendered with.
   */

  /**
   * The formatter for the text for minimum value.
   * Should be changed upon the locale the UI is rendered with.
   */
  formatMinText?: string;
  /**
   * The label text.
   */

  /**
   * The label text.
   */
  labelText?: string;
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
   * The form name.
   */

  /**
   * The form name.
   */
  name?: string;
  /**
   * The snapping step of the value.
   */

  /**
   * The snapping step of the value.
   */
  step?: number;
  /**
   * A value determining how much the value should increase/decrease by Shift+arrow keys,
   * which will be `(max - min) / stepRatio`.
   */

  /**
   * A value determining how much the value should increase/decrease by Shift+arrow keys,
   * which will be `(max - min) / stepRatio`.
   */
  stepRatio?: number;
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
  /**
   * The event handler for the custom event fired after the value is changed in `<bx-slider-input>` by user gesture.
   */

  /**
   * The event handler for the custom event fired after the value is changed in `<bx-slider-input>` by user gesture.
   */
  onChangeInput?: (event: CustomEvent) => void;
  [prop: string]: unknown;
}
/**
 * Slider.
 * @element bx-slider
 * @slot label-text - The label text.
 * @slot max-text - The text for maximum value.
 * @slot min-text - The text for minimum value.
 * @fires bx-slider-changed - The custom event fired after the value is changed by user gesture.
 */

/**
 * Slider.
 * @element bx-slider
 * @slot label-text - The label text.
 * @slot max-text - The text for maximum value.
 * @slot min-text - The text for minimum value.
 * @fires bx-slider-changed - The custom event fired after the value is changed by user gesture.
 */
declare class BXSlider extends Component<ComponentProps> {}

export default BXSlider;
