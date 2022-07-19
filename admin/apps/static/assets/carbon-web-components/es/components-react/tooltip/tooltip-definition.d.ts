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
   * How the tooltip is aligned to the trigger button.
   */
  alignment?: string;
  /**
   * The text for the tooltip body.
   */

  /**
   * The text for the tooltip body.
   */
  bodyText?: string;
  /**
   * The tooltip direction.
   */

  /**
   * The tooltip direction.
   */
  direction?: string;
  [prop: string]: unknown;
}
/**
 * Definition tooltip.
 * @element bx-tooltip-definition
 * @slot body - The tooltip body content.
 */

/**
 * Definition tooltip.
 * @element bx-tooltip-definition
 * @slot body - The tooltip body content.
 */
declare class BXTooltipDefinition extends Component<ComponentProps> {}

export default BXTooltipDefinition;
