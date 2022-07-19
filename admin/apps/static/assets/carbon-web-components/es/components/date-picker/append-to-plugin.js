/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * The configuration for the Flatpickr plugin to put the calendar dropdown in shadow DOM.
 */

/**
 * @param config Plugin configuration.
 * @returns A Flatpickr plugin to put the calendar dropdown in shadow DOM.
 */
export default (config => fp => {
  /**
   * Adjusts the floating meun position after Flatpicker sets it.
   */
  const handlePreCalendarPosition = async () => {
    await Promise.resolve();
    const {
      calendarContainer,
      config: fpConfig,
      _positionElement: positionElement
    } = fp;
    const {
      appendTo
    } = fpConfig;
    const {
      top: containerTop
    } = appendTo.getBoundingClientRect();
    const {
      bottom: refBottom
    } = positionElement.getBoundingClientRect();
    const isRtl = appendTo.ownerDocument.defaultView.getComputedStyle(appendTo).getPropertyValue('direction') === 'rtl';
    calendarContainer.style.top = `${refBottom - containerTop}px`;
    calendarContainer.style.left = !isRtl ? '0' : 'auto';
    calendarContainer.style.right = !isRtl ? 'auto' : '0';
  };
  /**
   * Registers this Flatpickr plugin.
   * @param calendar The Flatpickr instance.
   */


  const register = () => {
    fp.loadedPlugins.push('carbonFlatpickrAppendToPlugin');
  };

  return {
    appendTo: config.appendTo,
    onReady: register,
    onPreCalendarPosition: handlePreCalendarPosition
  };
});
//# sourceMappingURL=append-to-plugin.js.map
