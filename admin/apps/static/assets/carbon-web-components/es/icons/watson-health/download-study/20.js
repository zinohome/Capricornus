/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { svg } from 'lit-html';
import spread from '../../../globals/directives/spread';
const svgResultCarbonIcon = ({ children, ...attrs } = {}) =>
  svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${spread(
    attrs
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M30 25L28.586 23.586 26 26.172 26 18 24 18 24 26.172 21.414 23.586 20 25 25 30 30 25zM19 14H23V16H19zM19 10H26V12H19zM9 18h6a3 3 0 013 3v2H16V21a1 1 0 00-1-1H9a1 1 0 00-1 1v2H6V21A3 3 0 019 18zM16 13a4 4 0 10-4 4A4 4 0 0016 13zm-2 0a2 2 0 11-2-2A2 2 0 0114 13z"></path><path d="M18,26H4V6H28V16h2V6a2,2,0,0,0-2-2H4A2,2,0,0,0,2,6V26a2,2,0,0,0,2,2H18Z"></path></svg>`;
export default svgResultCarbonIcon;
