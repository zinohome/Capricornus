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
   * The assistive text for the close button.
   */
  closeButtonAssistiveText?: string;
  /**
   * The color scheme.
   */

  /**
   * The color scheme.
   */
  colorScheme?: string;
  /**
   * `true` if the search box should be disabled.
   */

  /**
   * `true` if the search box should be disabled.
   */
  disabled?: boolean;
  /**
   * The label text.
   */

  /**
   * The label text.
   */
  labelText?: string;
  /**
   * The form name.
   */

  /**
   * The form name.
   */
  name?: string;
  /**
   * The placeholder text.
   */

  /**
   * The placeholder text.
   */
  placeholder?: string;
  /**
   * The search box size.
   */

  /**
   * The search box size.
   */
  size?: string;
  /**
   * The `<input>` name.
   */

  /**
   * The `<input>` name.
   */
  type?: string;
  /**
   * The value.
   */

  /**
   * The value.
   */
  value?: string;
  /**
   * The event handler for the custom event fired after the search content is changed upon a user gesture.
   */

  /**
   * The event handler for the custom event fired after the search content is changed upon a user gesture.
   */
  onInput?: (event: CustomEvent) => void;
  [prop: string]: unknown;
}
/**
 * Search box.
 * @element bx-search
 * @csspart search-icon The search icon.
 * @csspart label-text The label text.
 * @csspart input The input box.
 * @csspart close-button The close button.
 * @csspart close-icon The close icon.
 * @fires bx-search-input - The custom event fired after the search content is changed upon a user gesture.
 */

/**
 * Search box.
 * @element bx-search
 * @csspart search-icon The search icon.
 * @csspart label-text The label text.
 * @csspart input The input box.
 * @csspart close-button The close button.
 * @csspart close-icon The close icon.
 * @fires bx-search-input - The custom event fired after the search content is changed upon a user gesture.
 */
declare class BXSearch extends Component<ComponentProps> {}

export default BXSearch;
