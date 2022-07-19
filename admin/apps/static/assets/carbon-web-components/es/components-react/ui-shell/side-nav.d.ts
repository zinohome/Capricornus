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
   * Collapse mode of the side nav.
   */
  collapseMode?: string;
  /**
   * `true` to expand the side nav.
   */

  /**
   * `true` to expand the side nav.
   */
  expanded?: boolean;
  /**
   * Usage mode of the side nav.
   */

  /**
   * Usage mode of the side nav.
   */
  usageMode?: string;
  /**
   * The event handler for the custom event fired after the header menu button in the document is toggled upon a user gesture.
   */

  /**
   * The event handler for the custom event fired after the header menu button in the document is toggled upon a user gesture.
   */
  onButtonToggle?: (event: CustomEvent) => void;
  [prop: string]: unknown;
}
/**
 * Side nav.
 * @element bx-side-nav
 */

/**
 * Side nav.
 * @element bx-side-nav
 */
declare class BXSideNav extends Component<ComponentProps> {}

export default BXSideNav;
