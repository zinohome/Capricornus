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
   * `true` if the button should be disabled.
   */
  disabled?: boolean;
  /**
   * The default file name.
   */

  /**
   * The default file name.
   */
  download?: string;
  /**
   * Link `href`.
   */

  /**
   * Link `href`.
   */
  href?: string;
  /**
   * The language of what `href` points to.
   */

  /**
   * The language of what `href` points to.
   */
  hreflang?: string;
  /**
   * The a11y role for `<a>`.
   */

  /**
   * The a11y role for `<a>`.
   */
  linkRole?: string;
  /**
   * URLs to ping.
   */

  /**
   * URLs to ping.
   */
  ping?: string;
  /**
   * The link type.
   */

  /**
   * The link type.
   */
  rel?: string;
  /**
   * Link size.
   */

  /**
   * Link size.
   */
  size?: string;
  /**
   * The link target.
   */

  /**
   * The link target.
   */
  target?: string;
  /**
   * MIME type of the `target`.
   */

  /**
   * MIME type of the `target`.
   */
  type?: string;
  [prop: string]: unknown;
}
/**
 * Link.
 * @element bx-link
 * @csspart link The link.
 */

/**
 * Link.
 * @element bx-link
 * @csspart link The link.
 */
declare class BXLink extends Component<ComponentProps> {}

export default BXLink;
