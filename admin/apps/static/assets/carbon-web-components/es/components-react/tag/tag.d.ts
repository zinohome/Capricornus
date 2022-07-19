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
   * `true` if the tag should be disabled
   */
  disabled?: boolean;
  /**
   * The size of the tag.
   */

  /**
   * The size of the tag.
   */
  size?: string;
  /**
   * The type of the tag.
   */

  /**
   * The type of the tag.
   */
  type?: string;
  [prop: string]: unknown;
}
/**
 * Tag.
 * @element bx-tag
 */

/**
 * Tag.
 * @element bx-tag
 */
declare class BXTag extends Component<ComponentProps> {}

export default BXTag;
