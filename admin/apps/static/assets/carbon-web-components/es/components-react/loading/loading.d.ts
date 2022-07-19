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
   * The assistive text for the spinner icon.
   */
  assistiveText?: string;
  /**
   * Spinner type.
   */

  /**
   * Spinner type.
   */
  type?: string;
  /**
   * `true` if spinner should stop.
   */

  /**
   * `true` if spinner should stop.
   */
  inactive?: boolean;
  [prop: string]: unknown;
}
/**
 * Spinner indicating loading state.
 * @element bx-loading
 */

/**
 * Spinner indicating loading state.
 * @element bx-loading
 */
declare class BXLoading extends Component<ComponentProps> {}

export default BXLoading;
