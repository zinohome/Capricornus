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
   * The color scheme.
   */
  colorScheme?: string;
  [prop: string]: unknown;
}
/**
 * Data table body.
 * @element bx-table-body
 */

/**
 * Data table body.
 * @element bx-table-body
 */
declare class BXTableBody extends Component<ComponentProps> {}

export default BXTableBody;
