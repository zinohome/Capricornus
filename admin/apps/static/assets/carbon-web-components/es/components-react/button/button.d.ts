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
   * `true` if the button should have input focus when the page loads.
   */
  autofocus?: boolean;
  /**
   * `true` if the button should be disabled.
   */

  /**
   * `true` if the button should be disabled.
   */
  disabled?: boolean;
  /**
   * The default file name, used if this button is rendered as `<a>`.
   */

  /**
   * The default file name, used if this button is rendered as `<a>`.
   */
  download?: string;
  /**
   * Link `href`. If present, this button is rendered as `<a>`.
   */

  /**
   * Link `href`. If present, this button is rendered as `<a>`.
   */
  href?: string;
  /**
   * The language of what `href` points to, if this button is rendered as `<a>`.
   */

  /**
   * The language of what `href` points to, if this button is rendered as `<a>`.
   */
  hreflang?: string;
  /**
   * Button icon layout.
   */

  /**
   * Button icon layout.
   */
  iconLayout?: string;
  /**
   * `true` if expressive theme enabled.
   */

  /**
   * `true` if expressive theme enabled.
   */
  isExpressive?: boolean;
  /**
   * Button kind.
   */

  /**
   * Button kind.
   */
  kind?: string;
  /**
   * The a11y role for `<a>`.
   */

  /**
   * The a11y role for `<a>`.
   */
  linkRole?: string;
  /**
   * URLs to ping, if this button is rendered as `<a>`.
   */

  /**
   * URLs to ping, if this button is rendered as `<a>`.
   */
  ping?: string;
  /**
   * The link type, if this button is rendered as `<a>`.
   */

  /**
   * The link type, if this button is rendered as `<a>`.
   */
  rel?: string;
  /**
   * Button size.
   */

  /**
   * Button size.
   */
  size?: string;
  /**
   * The link target, if this button is rendered as `<a>`.
   */

  /**
   * The link target, if this button is rendered as `<a>`.
   */
  target?: string;
  /**
   * The default behavior if the button is rendered as `<button>`. MIME type of the `target`if this button is rendered as `<a>`.
   */

  /**
   * The default behavior if the button is rendered as `<button>`. MIME type of the `target`if this button is rendered as `<a>`.
   */
  type?: string;
  [prop: string]: unknown;
}
/**
 * Button.
 * @element bx-btn
 * @csspart button The button.
 */

/**
 * Button.
 * @element bx-btn
 * @csspart button The button.
 */
declare class BXButton extends Component<ComponentProps> {}

export default BXButton;
