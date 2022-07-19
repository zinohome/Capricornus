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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M28,6V26H4V6H28m0-2H4A2,2,0,0,0,2,6V26a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V6a2,2,0,0,0-2-2Z"></path><path d="M6 10H13V12H6zM6 14H10V16H6zM23 18H17a3 3 0 00-3 3v2h2V21a1 1 0 011-1h6a1 1 0 011 1v2h2V21A3 3 0 0023 18zM20 17a4 4 0 10-4-4A4 4 0 0020 17zm0-6a2 2 0 11-2 2A2 2 0 0120 11z"></path></svg>`;
export default svgResultCarbonIcon;
