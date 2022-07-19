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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M30,15A6,6,0,1,0,20,19.46V29l4-1.8838L28,29V19.46A5.98,5.98,0,0,0,30,15ZM26,25.8477l-2-.9415-2,.9415V20.65a5.8877,5.8877,0,0,0,4,0ZM24,19a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,24,19Z"></path><path d="M14,2A6.0066,6.0066,0,0,0,8,8v6H6a2.0023,2.0023,0,0,0-2,2V28a2.0023,2.0023,0,0,0,2,2H17V28H6V16h9V14H10V8a4,4,0,0,1,7.92-.8008l1.96-.3984A6.0167,6.0167,0,0,0,14,2Z"></path></svg>`;
export default svgResultCarbonIcon;
