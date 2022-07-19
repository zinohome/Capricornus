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
   * The type of skeleton text.
   */
  type?: string;
  [prop: string]: unknown;
}
/**
 * Skeleton text.
 * @element bx-skeleton-text
 */

/**
 * Skeleton text.
 * @element bx-skeleton-text
 */
declare class BXSkeletonText extends Component<ComponentProps> {}

export default BXSkeletonText;
