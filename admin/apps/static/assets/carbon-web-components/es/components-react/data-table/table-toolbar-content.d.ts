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
   * `true` if this batch actions bar is active.
   */
  hasBatchActions?: boolean;
  [prop: string]: unknown;
}
/**
 * Table toolbar content.
 * @element bx-table-toolbar-content
 */

/**
 * Table toolbar content.
 * @element bx-table-toolbar-content
 */
declare class BXTableToolbarContent extends Component<ComponentProps> {}

export default BXTableToolbarContent;
