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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16">${children}<path d="M8,2c3.3,0,6,2.7,6,6s-2.7,6-6,6s-6-2.7-6-6S4.7,2,8,2 M8,1C4.1,1,1,4.1,1,8s3.1,7,7,7s7-3.1,7-7S11.9,1,8,1z"></path><path d="M6,11.5c-0.1,0-0.2,0-0.3-0.1c-0.2-0.1-0.2-0.3-0.2-0.4V5c0-0.2,0.1-0.3,0.2-0.4c0.2-0.1,0.3-0.1,0.5,0l5.5,3	C12,7.7,12.1,8,11.9,8.2c0,0.1-0.1,0.2-0.2,0.2l-5.5,3C6.2,11.5,6.1,11.5,6,11.5z M6.5,5.8v4.3l4-2.2L6.5,5.8z"></path></svg>`;
export default svgResultCarbonIcon;
