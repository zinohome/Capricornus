/**
 * @license
 *
 * Copyright IBM Corp. 2019
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { render } from 'lit-html';
import ChevronLeft16 from "../../icons/chevron--left/16";
import ChevronRight16 from "../../icons/chevron--right/16";
/**
 * @param config Plugin configuration.
 * @returns A Flatpickr plugin to set the right icons in the design system.
 */

/**
 * @param config Plugin configuration.
 * @returns A Flatpickr plugin to set the right icons in the design system.
 */

export default (() => fp => {
  /**
   * Sets the icon in the design system.
   */
  const setIcon = () => {
    const {
      prevMonthNav,
      nextMonthNav
    } = fp;
    render(ChevronLeft16(), prevMonthNav);
    render(ChevronRight16(), nextMonthNav);
  };
  /**
   * Sets empty arrow icon contents as we render those icons after initialization.
   */


  const parseConfig = () => {
    const {
      config
    } = fp;
    config.prevArrow = '';
    config.nextArrow = '';
  };
  /**
   * Registers this Flatpickr plugin.
   * @param calendar The Flatpickr instance.
   */


  const register = () => {
    fp.loadedPlugins.push('carbonFlatpickrIconPlugin');
  };

  return {
    onParseConfig: parseConfig,
    onReady: [register, setIcon]
  };
});
//# sourceMappingURL=icon-plugin.js.map
