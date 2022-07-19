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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M20,2H4A2,2,0,0,0,2,4V8a2,2,0,0,0,2,2V28a2,2,0,0,0,2,2H18a2,2,0,0,0,2-2V10a2,2,0,0,0,2-2V4A2,2,0,0,0,20,2ZM6,14H9V24H6ZM18,28H6V26h5V12H6V10H18ZM4,8V4H20V8Z"></path><circle cx="26" cy="16" r="4"></circle></svg>`;
export default svgResultCarbonIcon;
