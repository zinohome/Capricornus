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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M16,2a14,14,0,0,0-5.1,27,13.24,13.24,0,0,1,0-4l1.65-7A5.05,5.05,0,0,1,12.17,16c0-1.94,1.13-3.4,2.53-3.4a1.76,1.76,0,0,1,1.77,2c0,1.2-.76,3-1.16,4.66a2,2,0,0,0,2.08,2.53c2.48,0,4.4-2.63,4.4-6.41a5.53,5.53,0,0,0-5.85-5.7,6.06,6.06,0,0,0-6.32,6.08,5.42,5.42,0,0,0,1,3.19.44.44,0,0,1,.1.4c-.11.44-.35,1.4-.39,1.59s-.21.31-.47.19c-1.75-.82-2.84-3.37-2.84-5.43,0-4.41,3.21-8.47,9.25-8.47,4.85,0,8.63,3.46,8.63,8.09,0,4.82-3,8.7-7.27,8.7a3.76,3.76,0,0,1-3.21-1.6l-.87,3.33a15.55,15.55,0,0,1-1.74,3.67A14.17,14.17,0,0,0,16,30,14,14,0,0,0,16,2"></path></svg>`;
export default svgResultCarbonIcon;
