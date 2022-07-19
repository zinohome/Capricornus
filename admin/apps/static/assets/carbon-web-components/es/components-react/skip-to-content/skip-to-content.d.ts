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
   * The assistive text for the link,
   */
  linkAssisstiveText?: string;
  /**
   * The skip link href.
   */

  /**
   * The skip link href.
   */
  href?: string;
  [prop: string]: unknown;
}
/**
 * Skip-to-content link.
 * @element bx-skip-to-content
 */

/**
 * Skip-to-content link.
 * @element bx-skip-to-content
 */
declare class BXSkipToContent extends Component<ComponentProps> {}

export default BXSkipToContent;
