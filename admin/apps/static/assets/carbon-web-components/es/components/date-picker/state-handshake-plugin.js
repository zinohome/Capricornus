/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * @param config Plugin configuration.
 * @returns A Flatpickr plugin to handshake states with `<bx-date-picker>`.
 */
export default (datePicker => fp => {
  /**
   * Sets open state.
   */
  const setOpen = () => {
    datePicker.open = true;
  };
  /**
   * Sets closed state.
   */


  const setClosed = () => {
    datePicker.open = false;
  };
  /**
   * Propagates Flatpickr's `onChange` event to `<bx-date-picker>`.
   * @param selectedDates The latest selected dates.
   */


  const handleChange = selectedDates => {
    const {
      eventChange
    } = datePicker.constructor;
    datePicker.dispatchEvent(new CustomEvent(eventChange, {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail: {
        selectedDates
      }
    }));
  };
  /**
   * Registers this Flatpickr plugin.
   * @param calendar The Flatpickr instance.
   */


  const register = (_selectedDates, _value, calendar) => {
    datePicker.calendar = calendar;
    fp.loadedPlugins.push('carbonFlatpickrStateHandshakePlugin');
  };

  return {
    onOpen: setOpen,
    onClose: setClosed,
    onChange: handleChange,
    onReady: [register]
  };
});
//# sourceMappingURL=state-handshake-plugin.js.map
