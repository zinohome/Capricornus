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
   * The date format to let Flatpickr use.
   */
  dateFormat?: string;
  /**
   * Controls the disabled state of the input
   */

  /**
   * Controls the disabled state of the input
   */
  disabled?: boolean;
  /**
   * The localization data.
   */

  /**
   * The localization data.
   */
  locale?: string;
  /**
   * The date range that a user can pick in calendar dropdown.
   */

  /**
   * The date range that a user can pick in calendar dropdown.
   */
  enabledRange?: string;
  /**
   * Name for the input in the `FormData`
   */

  /**
   * Name for the input in the `FormData`
   */
  name?: string;
  /**
   * `true` if the date picker should be open.
   */

  /**
   * `true` if the date picker should be open.
   */
  open?: boolean;
  /**
   * The date(s) in ISO8601 format (date portion only), for range mode, '/' is used for separate start/end dates.
   */

  /**
   * The date(s) in ISO8601 format (date portion only), for range mode, '/' is used for separate start/end dates.
   */
  value?: string;
  /**
   * The event handler for the custom event when Flatpickr throws an error.
   */

  /**
   * The event handler for the custom event when Flatpickr throws an error.
   */
  onFlatpickrError?: (event: CustomEvent) => void;
  /**
   * The event handler for the custom event fired on this element when Flatpickr updates its value.
   */

  /**
   * The event handler for the custom event fired on this element when Flatpickr updates its value.
   */
  onChange?: (event: CustomEvent) => void;
  [prop: string]: unknown;
}
/**
 * Date picker.
 * @element bx-date-picker
 * @fires bx-date-picker-changed - The custom event fired on this element when Flatpickr updates its value.
 */

/**
 * Date picker.
 * @element bx-date-picker
 * @fires bx-date-picker-changed - The custom event fired on this element when Flatpickr updates its value.
 */
declare class BXDatePicker extends Component<ComponentProps> {}

export default BXDatePicker;
