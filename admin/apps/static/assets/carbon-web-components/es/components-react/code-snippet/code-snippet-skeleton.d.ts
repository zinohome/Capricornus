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
   * The type of code snippet. Corresponds to the attribute with the same name.
   */
  type?: string;
  [prop: string]: unknown;
}
/**
 * Skeleton of code snippet.
 */

/**
 * Skeleton of code snippet.
 */
declare class BXCodeSnippetSkeleton extends Component<ComponentProps> {}

export default BXCodeSnippetSkeleton;
