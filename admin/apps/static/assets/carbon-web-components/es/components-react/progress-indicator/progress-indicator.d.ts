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
   * `true` if the progress indicator should be vertical.
   */
  vertical?: boolean;
  [prop: string]: unknown;
}
/**
 * Progress indicator.
 * @element bx-progress-indicator
 */

/**
 * Progress indicator.
 * @element bx-progress-indicator
 */
declare class BXProgressIndicator extends Component<ComponentProps> {}

export default BXProgressIndicator;
