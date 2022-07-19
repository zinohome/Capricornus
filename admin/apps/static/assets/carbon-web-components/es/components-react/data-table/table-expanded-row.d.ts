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
   * The colspan.
   */
  colSpan?: number;
  /**
   * `true` if the table row should be expanded.
   */

  /**
   * `true` if the table row should be expanded.
   */
  expanded?: boolean;
  /**
   * `true` if the table row should be highlighted.
   */

  /**
   * `true` if the table row should be highlighted.
   */
  highlighted?: boolean;
  [prop: string]: unknown;
}
/**
 * Table row of collapsible details.
 * @element bx-table-expanded-row
 */

/**
 * Table row of collapsible details.
 * @element bx-table-expanded-row
 */
declare class BXTableExpandedRow extends Component<ComponentProps> {}

export default BXTableExpandedRow;
