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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M26,18v6.5859L15.8712,14.457A5.9242,5.9242,0,0,0,17,11a6,6,0,1,0-7,5.91V28h2V16.91a5.9566,5.9566,0,0,0,2.4554-1.04L24.5859,26H18v2H28V18ZM11,15a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,11,15Z"></path></svg>`;
export default svgResultCarbonIcon;
