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
   * The formatter for the assistive text for screen readers to announce.
   * Should be changed upon the locale the UI is rendered with.
   */
  formatLabelText?: string;
  /**
   * The formatter for the text next to the select box. Should be changed upon the locale the UI is rendered with.
   */

  /**
   * The formatter for the text next to the select box. Should be changed upon the locale the UI is rendered with.
   */
  formatSupplementalText?: string;
  /**
   * The number of total pages.
   */

  /**
   * The number of total pages.
   */
  total?: number;
  /**
   * The value, working as the current page, index that starts with zero.
   */

  /**
   * The value, working as the current page, index that starts with zero.
   */
  value?: number;
  /**
   * The event handler for the custom event fired after the page is changed.
   */

  /**
   * The event handler for the custom event fired after the page is changed.
   */
  onChange?: (event: CustomEvent) => void;
  [prop: string]: unknown;
}
/**
 * The select box for the current page.
 * @element bx-pages-select
 * @fires bx-pages-select-changed - The custom event fired after the page is changed.
 */

/**
 * The select box for the current page.
 * @element bx-pages-select
 * @fires bx-pages-select-changed - The custom event fired after the page is changed.
 */
declare class BXPagesSelect extends Component<ComponentProps> {}

export default BXPagesSelect;
