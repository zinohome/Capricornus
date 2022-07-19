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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M20.7168,13.7705A5.9174,5.9174,0,0,0,23,9c0-3.5327-2.8784-6-7-6a6.627,6.627,0,0,0-7,7V31h2V25.1206a8.1261,8.1261,0,0,0,6,2.48A7.3833,7.3833,0,0,0,24.6528,20,6.6364,6.6364,0,0,0,20.7168,13.7705ZM17,25.6A5.6781,5.6781,0,0,1,11,20V10a4.6856,4.6856,0,0,1,5-5c3.0374,0,5,1.57,5,4a3.8732,3.8732,0,0,1-4,4v2c3.4341,0,5.6528,1.9629,5.6528,5A5.3907,5.3907,0,0,1,17,25.6Z"></path></svg>`;
export default svgResultCarbonIcon;
