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
   * The formatter, used with determinate the total pages. Should be changed upon the locale the UI is rendered with.
   */
  formatStatusWithDeterminateTotal?: string;
  /**
   * The formatter, used with indeterminate the total pages. Should be changed upon the locale the UI is rendered with.
   */

  /**
   * The formatter, used with indeterminate the total pages. Should be changed upon the locale the UI is rendered with.
   */
  formatStatusWithIndeterminateTotal?: string;
  /**
   * `true` to explicitly state that user is at the last page.
   */

  /**
   * `true` to explicitly state that user is at the last page.
   */
  atLastPage?: boolean;
  /**
   * `true` if the pagination UI should be disabled.
   */

  /**
   * `true` if the pagination UI should be disabled.
   */
  disabled?: boolean;
  /**
   * The assistive text for the button to go to next page.
   */

  /**
   * The assistive text for the button to go to next page.
   */
  nextButtonText?: string;
  /**
   * Number of items per page.
   */

  /**
   * Number of items per page.
   */
  pageSize?: number;
  /**
   * The label text for the UI to select page size.
   */

  /**
   * The label text for the UI to select page size.
   */
  pageSizeLabelText?: string;
  /**
   * The assistive text for the button to go to previous page.
   */

  /**
   * The assistive text for the button to go to previous page.
   */
  prevButtonText?: string;
  /**
   * The row number where current page start with, index that starts with zero.
   */

  /**
   * The row number where current page start with, index that starts with zero.
   */
  start?: number;
  /**
   * The number of total items.
   */

  /**
   * The number of total items.
   */
  total?: number;
  /**
   * The event handler for the custom event fired after the current row number is changed.
   */

  /**
   * The event handler for the custom event fired after the current row number is changed.
   */
  onChangeCurrent?: (event: CustomEvent) => void;
  /**
   * The event handler for the custom event fired after the current page is changed from `<bx-pages-select>`.
   */

  /**
   * The event handler for the custom event fired after the current page is changed from `<bx-pages-select>`.
   */
  onChangePage?: (event: CustomEvent) => void;
  /**
   * The event handler for the custom event fired after the number of rows per page is changed from `<bx-page-sizes-select>`.
   */

  /**
   * The event handler for the custom event fired after the number of rows per page is changed from `<bx-page-sizes-select>`.
   */
  onChangePageSize?: (event: CustomEvent) => void;
  [prop: string]: unknown;
}
/**
 * Pagination UI.
 * @element bx-pagination
 * @slot page-sizes-select - Where to put in the `<page-sizes-select>`.
 * @fires bx-pages-select-changed - The custom event fired after the current page is changed from `<bx-pages-select>`.
 * @fires bx-page-sizes-select-changed
 *   The custom event fired after the number of rows per page is changed from `<bx-page-sizes-select>`.
 */

/**
 * Pagination UI.
 * @element bx-pagination
 * @slot page-sizes-select - Where to put in the `<page-sizes-select>`.
 * @fires bx-pages-select-changed - The custom event fired after the current page is changed from `<bx-pages-select>`.
 * @fires bx-page-sizes-select-changed
 *   The custom event fired after the number of rows per page is changed from `<bx-page-sizes-select>`.
 */
declare class BXPagination extends Component<ComponentProps> {}

export default BXPagination;
