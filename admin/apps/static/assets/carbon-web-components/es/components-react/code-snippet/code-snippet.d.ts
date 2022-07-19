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
   * An assistive text for screen reader to advice a DOM node is for code snippet.
   */
  codeAssistiveText?: string;
  /**
   * The context content for the collapse button.
   */

  /**
   * The context content for the collapse button.
   */
  collapseButtonText?: string;
  /**
   * The color scheme.
   */

  /**
   * The color scheme.
   */
  colorScheme?: string;
  /**
   * An assistive text for screen reader to announce, telling that the button copies the content to the clipboard.
   */

  /**
   * An assistive text for screen reader to announce, telling that the button copies the content to the clipboard.
   */
  copyButtonAssistiveText?: string;
  /**
   * The feedback text for the copy button.
   */

  /**
   * The feedback text for the copy button.
   */
  copyButtonFeedbackText?: string;
  /**
   * The number in milliseconds to determine how long the tooltip for the copy button should remain.
   */

  /**
   * The number in milliseconds to determine how long the tooltip for the copy button should remain.
   */
  copyButtonFeedbackTimeout?: number;
  /**
   * The context content for the expand button.
   */

  /**
   * The context content for the expand button.
   */
  expandButtonText?: string;
  /**
   * The type of code snippet.
   */

  /**
   * The type of code snippet.
   */
  type?: string;
  [prop: string]: unknown;
}
/**
 * Basic code snippet.
 * @element bx-code-snippet
 */

/**
 * Basic code snippet.
 * @element bx-code-snippet
 */
declare class BXCodeSnippet extends Component<ComponentProps> {}

export default BXCodeSnippet;
