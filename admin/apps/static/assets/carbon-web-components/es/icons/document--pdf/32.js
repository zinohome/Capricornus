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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M30 18L30 16 24 16 24 26 26 26 26 22 29 22 29 20 26 20 26 18 30 18zM19 26H15V16h4a3.0033 3.0033 0 013 3v4A3.0033 3.0033 0 0119 26zm-2-2h2a1.0011 1.0011 0 001-1V19a1.0011 1.0011 0 00-1-1H17zM11 16H6V26H8V23h3a2.0027 2.0027 0 002-2V18A2.0023 2.0023 0 0011 16zM8 21V18h3l.001 3z"></path><path d="M22,14V10a.9092.9092,0,0,0-.3-.7l-7-7A.9087.9087,0,0,0,14,2H4A2.0059,2.0059,0,0,0,2,4V28a2,2,0,0,0,2,2H20V28H4V4h8v6a2.0059,2.0059,0,0,0,2,2h6v2Zm-8-4V4.4L19.6,10Z"></path></svg>`;
export default svgResultCarbonIcon;
