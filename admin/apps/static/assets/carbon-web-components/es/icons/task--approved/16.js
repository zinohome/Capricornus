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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M30,20A6,6,0,1,0,20,24.46V32l4-1.8936L28,32V24.46A5.98,5.98,0,0,0,30,20Zm-4,8.84-2-.9467L22,28.84V25.65a5.8877,5.8877,0,0,0,4,0ZM24,24a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,24,24Z"></path><path d="M25,5H22V4a2.0058,2.0058,0,0,0-2-2H12a2.0058,2.0058,0,0,0-2,2V5H7A2.0058,2.0058,0,0,0,5,7V28a2.0058,2.0058,0,0,0,2,2h9V28H7V7h3v3H22V7h3v5h2V7A2.0058,2.0058,0,0,0,25,5ZM20,8H12V4h8Z"></path></svg>`;
export default svgResultCarbonIcon;
