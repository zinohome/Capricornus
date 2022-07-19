/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component } from 'react';
import { ComponentProps as ParentComponentProps } from '../search/search';
export interface ComponentProps extends ParentComponentProps {
  /**
   * `true` if the search box should be expanded.
   */
  expanded?: boolean;
  /**
   * The search box size.
   */

  /**
   * The search box size.
   */
  size?: string;
  /**
   * The event handler for the custom event fired after the search content is changed upon a user gesture.
   */

  /**
   * The event handler for the custom event fired after the search content is changed upon a user gesture.
   */
  onInput?: (event: CustomEvent) => void;
}
/**
 * Table toolbar search.
 * @element bx-table-toolbar-search
 * @fires bx-search-input - The custom event fired after the search content is changed upon a user gesture.
 */

/**
 * Table toolbar search.
 * @element bx-table-toolbar-search
 * @fires bx-search-input - The custom event fired after the search content is changed upon a user gesture.
 */
declare class BXTableToolbarSearch extends Component<ComponentProps> {}

export default BXTableToolbarSearch;
