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
   * `true` if the label should be hidden. Corresponds to the attribute with the same name.
   */
  hideLabel?: boolean;
  [prop: string]: unknown;
}
/**
 * Skeleton of number input.
 */

/**
 * Skeleton of number input.
 */
declare class BXNumberInputSkeleton extends Component<ComponentProps> {}

export default BXNumberInputSkeleton;
