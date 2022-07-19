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
   * The title.
   */

  /**
   * The title.
   */
  title?: string;
  /**
   * As child of <ul>, this element must have role of listitem
   */

  /**
   * As child of <ul>, this element must have role of listitem
   */
  role?: string;
  [prop: string]: unknown;
}
/**
 * Header nav item.
 * @element bx-header-nav-item
 * @csspart link The link.
 * @csspart title The title.
 */

/**
 * Header nav item.
 * @element bx-header-nav-item
 * @csspart link The link.
 * @csspart title The title.
 */
declare class BXHeaderNavItem extends Component<ComponentProps> {}

export default BXHeaderNavItem;
