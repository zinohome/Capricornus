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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M30,14a12.9845,12.9845,0,0,0-3.8286-9.2427L24.4143,3,23,4.4138l1.7573,1.7574a11.0713,11.0713,0,0,1,0,15.6572L22,24.5857,23.4143,26l2.7571-2.7573A12.9845,12.9845,0,0,0,30,14Z"></path><circle cx="17" cy="11" r="1"></circle><path d="M22,14a12.9845,12.9845,0,0,0-3.8286-9.2427L16.4143,3,15,4.4138l1.7573,1.7574a11.0713,11.0713,0,0,1,0,15.6572L14,24.5857,15.4143,26l2.7571-2.7573A12.9845,12.9845,0,0,0,22,14Z"></path><circle cx="25" cy="11" r="1"></circle><circle cx="9" cy="11" r="1"></circle><path d="M9.4141,24l.7573-.7573a13.0708,13.0708,0,0,0,0-18.4854L8,2.5857,5.8286,4.7571a13.0708,13.0708,0,0,0,0,18.4854L6.5859,24,2.293,28.2928A1,1,0,0,0,3,30H13a1,1,0,0,0,.707-1.707ZM4,14A10.9988,10.9988,0,0,1,7.2427,6.1712L8,5.4138l.7573.7574a11.0713,11.0713,0,0,1,0,15.6572L8,22.5857l-.7573-.7573A10.9988,10.9988,0,0,1,4,14ZM5.4141,28,8,25.4138,10.5859,28Z"></path></svg>`;
export default svgResultCarbonIcon;
