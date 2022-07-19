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
   * The table size.
   */
  size?: string;
  /**
   * `true` if this table should support sorting.
   */

  /**
   * `true` if this table should support sorting.
   */
  sort?: boolean;
  [prop: string]: unknown;
}
/**
 * Data table.
 * @element bx-table
 */

/**
 * Data table.
 * @element bx-table
 */
declare class BXTable extends Component<ComponentProps> {}

export default BXTable;
