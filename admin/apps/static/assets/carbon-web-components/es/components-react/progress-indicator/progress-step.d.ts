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
   * `true` if the progress step should be disabled.
   */
  disabled?: boolean;
  /**
   * The a11y text for the icon.
   */

  /**
   * The a11y text for the icon.
   */
  iconLabel?: string;
  /**
   * The primary progress label.
   */

  /**
   * The primary progress label.
   */
  labelText?: string;
  /**
   * The secondary progress label.
   */

  /**
   * The secondary progress label.
   */
  secondaryLabelText?: string;
  /**
   * The progress state.
   */

  /**
   * The progress state.
   */
  state?: string;
  /**
   * `true` if the progress step should be vertical.
   * @private
   */

  /**
   * `true` if the progress step should be vertical.
   * @private
   */
  vertical?: boolean;
  [prop: string]: unknown;
}
/**
 * Progress step.
 * @element bx-progress-step
 * @slot secondary-label-text - The secondary progress label.
 */

/**
 * Progress step.
 * @element bx-progress-step
 * @slot secondary-label-text - The secondary progress label.
 */
declare class BXProgressStep extends Component<ComponentProps> {}

export default BXProgressStep;
