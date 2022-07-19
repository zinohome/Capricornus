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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M26 6v4H6V6H26m0-2H6A2 2 0 004 6v4a2 2 0 002 2H26a2 2 0 002-2V6a2 2 0 00-2-2zM10 16V26H6V16h4m0-2H6a2 2 0 00-2 2V26a2 2 0 002 2h4a2 2 0 002-2V16a2 2 0 00-2-2zM26 16V26H16V16H26m0-2H16a2 2 0 00-2 2V26a2 2 0 002 2H26a2 2 0 002-2V16a2 2 0 00-2-2z"></path></svg>`;
export default svgResultCarbonIcon;
