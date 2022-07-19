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
   * The assistive text for the button.
   */
  assistiveText?: string;
  [prop: string]: unknown;
}
/**
 * Modal close button.
 * @element bx-modal-close-button
 * @csspart button The button.
 * @csspart close-icon The close icon.
 */

/**
 * Modal close button.
 * @element bx-modal-close-button
 * @csspart button The button.
 * @csspart close-icon The close icon.
 */
declare class BXModalCloseButton extends Component<ComponentProps> {}

export default BXModalCloseButton;
