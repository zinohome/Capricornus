import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";

/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import rangePlugin from 'flatpickr/dist/plugins/rangePlugin';

/**
 * @param config Plugin configuration.
 * @returns
 *   An extension of Flatpickr `rangePlugin` that does the following:
 *
 *   * Better ensures the calendar dropdown is always aligned to the `<input>` for the starting date.
 *     Workaround for: https://github.com/flatpickr/flatpickr/issues/1944
 *   * Disables the logic in Flatpickr `rangePlugin` that calculates the new range with the old selected date
 *     when user selects a date from calendar dropdown.
 *     We'd like to reset the selection when user re-opens calendar dropdown and re-selects a date.
 *     Workaround for: https://github.com/flatpickr/flatpickr/issues/1958
 *   * Disables the logic in Flatpickr `rangePlugin` that closes the calendar dropdown
 *     when it's lauched from the `<input>` for the end date and user selects a date.
 *     Workaround for: https://github.com/flatpickr/flatpickr/issues/1958
 *   * Ensures that the `<input>` in shadow DOM is treated as part of Flatpickr UI,
 *     by ensuring such `<input>` hits `.contains()` search from `fp.config.ignoredFocusElements`.
 *     Without that, Flatpickr clears the `<input>` when end date hasn't been selected yet (which we don't want).
 */
export default (config => {
  const factory = rangePlugin(_objectSpread({
    position: 'left'
  }, config));
  return fp => {
    const origRangePlugin = factory(fp);
    const {
      onReady: origOnReady
    } = origRangePlugin;
    return Object.assign(origRangePlugin, {
      onChange() {},

      onPreCalendarPosition() {},

      onValueUpdate(selectedDates) {
        const [startDateFormatted, endDateFormatted] = selectedDates.map(item => fp.formatDate(item, fp.config.dateFormat));

        if (startDateFormatted) {
          fp._input.value = startDateFormatted;
        }

        if (endDateFormatted) {
          config.input.value = endDateFormatted;
        }
      },

      onReady() {
        origOnReady.call(this);
        const {
          ignoredFocusElements
        } = fp.config;
        ignoredFocusElements.push(...ignoredFocusElements.map(elem => elem.shadowRoot).filter(Boolean));
      }

    });
  };
});
//# sourceMappingURL=range-plugin.js.map
