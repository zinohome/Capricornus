/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { forEach } from '../../globals/internal/collection-helpers';
/**
 * The configuration for the Flatpickr plugin to set CSS classes specific to this design system.
 */

/**
 * @param config Plugin configuration.
 * @returns A Flatpickr plugin to set CSS classes specific to this design system.
 */
export default (config => fp => {
  /**
   * Adds class names specific to our design system to calendar dropdown.
   */
  const ensureClassesInDatePicker = () => {
    const {
      calendarContainer,
      selectedDates
    } = fp;

    if (calendarContainer) {
      const {
        classCalendarContainer,
        classMonth,
        classWeekdays,
        classDays,
        classWeekday,
        classDay,
        classNoBorder,
        selectorFlatpickrMonth,
        selectorFlatpickrWeekdays,
        selectorFlatpickrDays,
        selectorFlatpickrWeekday,
        selectorFlatpickrDay,
        classFlatpickrToday
      } = config;
      calendarContainer.classList.add(classCalendarContainer);
      const month = calendarContainer.querySelector(selectorFlatpickrMonth);

      if (month) {
        month.classList.add(classMonth);
      }

      const weekdays = calendarContainer.querySelector(selectorFlatpickrWeekdays);

      if (weekdays) {
        weekdays.classList.add(classWeekdays);
      }

      const days = calendarContainer.querySelector(selectorFlatpickrDays);

      if (days) {
        days.classList.add(classDays);
      }

      forEach(calendarContainer.querySelectorAll(selectorFlatpickrWeekday), item => {
        item.innerHTML = item.innerHTML.replace(/\s+/g, '');
        item.classList.add(classWeekday);
      });
      forEach(calendarContainer.querySelectorAll(selectorFlatpickrDay), item => {
        item.classList.add(classDay);

        if (item.classList.contains(classFlatpickrToday) && selectedDates.length > 0) {
          item.classList.add(classNoBorder);
        } else if (item.classList.contains(classFlatpickrToday) && selectedDates.length === 0) {
          item.classList.remove(classNoBorder);
        }
      });
    }
  };
  /**
   * Registers this Flatpickr plugin.
   */


  const register = () => {
    fp.loadedPlugins.push('carbonFlatpickrCSSClassPlugin');
  };

  return {
    onMonthChange: ensureClassesInDatePicker,
    onYearChange: ensureClassesInDatePicker,
    onValueUpdate: ensureClassesInDatePicker,
    onOpen: ensureClassesInDatePicker,
    onReady: [register]
  };
});
//# sourceMappingURL=css-class-plugin.js.map
