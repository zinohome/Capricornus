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
   * The label text.
   */
  labelText?: string;
  /**
   * The value, working as the current page size.
   */

  /**
   * The value, working as the current page size.
   */
  value?: number;
  /**
   * The event handler for the custom event fired after the page size is changed.
   */

  /**
   * The event handler for the custom event fired after the page size is changed.
   */
  onChange?: (event: CustomEvent) => void;
  [prop: string]: unknown;
}
/**
 * The select box for page sizes.
 * @element bx-page-sizes-select
 * @slot label-text - The label text.
 * @fires bx-page-sizes-select-changed - The custom event fired after the page size is changed.
 */

/**
 * The select box for page sizes.
 * @element bx-page-sizes-select
 * @slot label-text - The label text.
 * @fires bx-page-sizes-select-changed - The custom event fired after the page size is changed.
 */
declare class BXPageSizesSelect extends Component<ComponentProps> {}

export default BXPageSizesSelect;
