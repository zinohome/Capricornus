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
   * `true` if the dropdown should be open.
   */
  open?: boolean;
  [prop: string]: unknown;
}
/**
 * Trigger button of tooltip.
 * @element bx-tooltip
 */

/**
 * Trigger button of tooltip.
 * @element bx-tooltip
 */
declare class BXTooltip extends Component<ComponentProps> {}

export default BXTooltip;
