/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Plugin } from 'flatpickr/dist/types/options';
/**
 * The configuration for the Flatpickr plugin to use text instead of `<select>` for month picker.
 */
export interface DatePickerMonthSelectPluginConfig {
    /**
     * `true` to use shorthand month.
     */
    shorthand?: boolean;
    /**
     * The CSS selector for the container of month/year selection UI.
     */
    selectorFlatpickrMonthYearContainer: string;
    /**
     * The CSS selector for the container of year selection UI.
     */
    selectorFlatpickrYearContainer: string;
    /**
     * The CSS selector for the text-based month selection UI.
     */
    selectorFlatpickrCurrentMonth: string;
    /**
     * The CSS class for the text-based month selection UI.
     */
    classFlatpickrCurrentMonth: string;
}
declare const _default: (config: DatePickerMonthSelectPluginConfig) => Plugin;
/**
 * @param config Plugin configuration.
 * @returns A Flatpickr plugin to use text instead of `<select>` for month picker.
 */
export default _default;

//# sourceMappingURL=month-select-plugin.d.ts.map
