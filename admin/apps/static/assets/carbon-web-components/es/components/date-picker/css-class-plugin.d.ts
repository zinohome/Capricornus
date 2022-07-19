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
 * The configuration for the Flatpickr plugin to set CSS classes specific to this design system.
 */
export interface DatePickerCSSClassPluginConfig {
    /**
     * The CSS class for the calendar dropdown.
     */
    classCalendarContainer: string;
    /**
     * The CSS class for the month navigator.
     */
    classMonth: string;
    /**
     * The CSS class for the container of the weekdays.
     */
    classWeekdays: string;
    /**
     * The CSS class for the container of the days.
     */
    classDays: string;
    /**
     * The CSS class applied to each weekdays.
     */
    classWeekday: string;
    /**
     * The CSS class applied to each days.
     */
    classDay: string;
    /**
     * The CSS class applied to the "today" highlight if there are any dates selected.
     */
    classNoBorder: string;
    /**
     * The CSS selector for Flatpickr's month navigator.
     */
    selectorFlatpickrMonth: string;
    /**
     * The CSS selector for Flatpickr's container of the weekdays.
     */
    selectorFlatpickrWeekdays: string;
    /**
     * The CSS selector for Flatpickr's container of the days.
     */
    selectorFlatpickrDays: string;
    /**
     * The CSS selector applied to Flatpickr's each weekdays.
     */
    selectorFlatpickrWeekday: string;
    /**
     * The CSS selector applied to Flatpickr's each days.
     */
    selectorFlatpickrDay: string;
    /**
     * The CSS class applied to Flatpickr's "today" highlight.
     */
    classFlatpickrToday: string;
}
declare const _default: (config: DatePickerCSSClassPluginConfig) => Plugin;
/**
 * @param config Plugin configuration.
 * @returns A Flatpickr plugin to set CSS classes specific to this design system.
 */
export default _default;

//# sourceMappingURL=css-class-plugin.d.ts.map
