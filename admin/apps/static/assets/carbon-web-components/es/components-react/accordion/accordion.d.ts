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
   * Accordion size.
   */
  size?: string;
  [prop: string]: unknown;
}
/**
 * Accordion container.
 * @element bx-accordion
 */

/**
 * Accordion container.
 * @element bx-accordion
 */
declare class BXAccordion extends Component<ComponentProps> {}

export default BXAccordion;
