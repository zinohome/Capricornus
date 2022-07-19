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
   * The loading status.
   */
  status?: string;
  [prop: string]: unknown;
}
/**
 * Lnline loading spinner.
 * @element bx-inline-loading
 */

/**
 * Lnline loading spinner.
 * @element bx-inline-loading
 */
declare class BXInlineLoading extends Component<ComponentProps> {}

export default BXInlineLoading;
