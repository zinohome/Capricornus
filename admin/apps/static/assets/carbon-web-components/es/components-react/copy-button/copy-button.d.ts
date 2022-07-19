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
   * An assistive text for screen reader to announce, telling that the button copies the content to the clipboard.
   */
  buttonAssistiveText?: string;
  /**
   * The feedback text.
   */

  /**
   * The feedback text.
   */
  feedbackText?: string;
  /**
   * The number in milliseconds to determine how long the tooltip should remain.
   */

  /**
   * The number in milliseconds to determine how long the tooltip should remain.
   */
  feedbackTimeout?: number;
  [prop: string]: unknown;
}
/**
 * Copy button.
 * @element bx-copy-button
 */

/**
 * Copy button.
 * @element bx-copy-button
 */
declare class BXCopyButton extends Component<ComponentProps> {}

export default BXCopyButton;
