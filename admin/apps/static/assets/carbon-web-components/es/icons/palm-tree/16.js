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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M18.57,28C17.897,26.7251,16,22.2261,16,12v-.1313l1.1172.7446A6.4613,6.4613,0,0,1,20,18h2a8.457,8.457,0,0,0-3.7734-7.0508L16.8027,10h1.5308a7.04,7.04,0,0,1,4.2,1.4L24.4,12.8l1.2-1.6L23.7334,9.8a9.06,9.06,0,0,0-5.4-1.8H17.1172A7.0306,7.0306,0,0,1,22,6h2V4H22a9.035,9.035,0,0,0-7,3.3643A9.035,9.035,0,0,0,8,4H6V6H8a7.0306,7.0306,0,0,1,4.8828,2H11.6665a9.06,9.06,0,0,0-5.4,1.8L4.4,11.2l1.2,1.6L7.4668,11.4a7.04,7.04,0,0,1,4.2-1.4h1.5308l-1.4239.9492A8.457,8.457,0,0,0,8,18h2a6.4613,6.4613,0,0,1,2.8828-5.3867L14,11.8687V12c0,8.9438,1.4116,13.7646,2.3611,16H2v2H30V28Z"></path></svg>`;
export default svgResultCarbonIcon;
