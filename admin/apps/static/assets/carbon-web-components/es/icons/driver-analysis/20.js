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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<circle cx="22" cy="16" r="2"></circle><path d="M30,15H27.91A6.0048,6.0048,0,0,0,22,10l-.022.001A9.9833,9.9833,0,0,0,4.0508,15H2v2H4.0508A9.9833,9.9833,0,0,0,21.978,21.999L22,22a6.0048,6.0048,0,0,0,5.91-5H30ZM14,8a7.9769,7.9769,0,0,1,5.7383,2.4463A6.0152,6.0152,0,0,0,16.0891,15H6.0693A8.0073,8.0073,0,0,1,14,8Zm0,16a8.0073,8.0073,0,0,1-7.9307-7h10.02a6.0152,6.0152,0,0,0,3.6492,4.5537A7.9769,7.9769,0,0,1,14,24Zm8-4a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,22,20Z"></path></svg>`;
export default svgResultCarbonIcon;
