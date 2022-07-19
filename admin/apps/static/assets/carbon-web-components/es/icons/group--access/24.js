/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { svg } from 'lit-html';
import spread from '../../globals/directives/spread';
const svgResultCarbonIcon = ({ children, ...attrs } = {}) =>
  svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${spread(
    attrs
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M8 19H6V17a3.0033 3.0033 0 013-3h5v2H9a1.0011 1.0011 0 00-1 1zM12 13a4 4 0 114-4A4.0045 4.0045 0 0112 13zm0-6a2 2 0 102 2A2.0021 2.0021 0 0012 7zM20 20a4 4 0 114-4A4.0045 4.0045 0 0120 20zm0-6a2 2 0 102 2A2.0021 2.0021 0 0020 14zM26 26H24V24a1.0011 1.0011 0 00-1-1H17a1.0011 1.0011 0 00-1 1v2H14V24a3.0033 3.0033 0 013-3h6a3.0033 3.0033 0 013 3z"></path><path d="M8 30H4a2.0021 2.0021 0 01-2-2V4A2.0021 2.0021 0 014 2H8V4H4V28H8zM28 30H24V28h4V4H24V2h4a2.0021 2.0021 0 012 2V28A2.0021 2.0021 0 0128 30z"></path></svg>`;
export default svgResultCarbonIcon;
