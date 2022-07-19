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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M22,28H12V26H22V10H6V20H4V10A2.0021,2.0021,0,0,1,6,8H22a2.0021,2.0021,0,0,1,2,2V26A2.0021,2.0021,0,0,1,22,28Z"></path><path d="M28,22H26V20h2V4H12V6H10V4a2.0021,2.0021,0,0,1,2-2H28a2.0021,2.0021,0,0,1,2,2V20A2.0021,2.0021,0,0,1,28,22Z"></path><path d="M10 14L10 16 14.586 16 3 27.586 4.414 29 16 17.414 16 22 18 22 18 14 10 14z"></path></svg>`;
export default svgResultCarbonIcon;
