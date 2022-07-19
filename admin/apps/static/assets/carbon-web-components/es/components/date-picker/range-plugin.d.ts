/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Config } from 'flatpickr/dist/plugins/rangePlugin';
import { Plugin } from 'flatpickr/dist/types/options';
declare const _default: (config: Config) => Plugin;
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
export default _default;

//# sourceMappingURL=range-plugin.d.ts.map
