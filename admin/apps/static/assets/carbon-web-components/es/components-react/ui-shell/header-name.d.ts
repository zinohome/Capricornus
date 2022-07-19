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
   * Link `href`.
   */
  href?: string;
  /**
   * The product name prefix.
   */

  /**
   * The product name prefix.
   */
  prefix?: string;
  [prop: string]: unknown;
}
/**
 * The product name UI in header nav.
 * @element bx-header-name
 * @csspart link The link.
 * @csspart prefix The prefix content.
 */

/**
 * The product name UI in header nav.
 * @element bx-header-name
 * @csspart link The link.
 * @csspart prefix The prefix content.
 */
declare class BXHeaderName extends Component<ComponentProps> {}

export default BXHeaderName;
