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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M22,6V4H12V6h4V8H12V20h4v2H12v2H22V22H18V20h4V8H18V6ZM14,18V15h6v3Zm6-5H14V10h6Z"></path><path d="M30,30H4a2,2,0,0,1-2-2V2H4V28H30Z"></path></svg>`;
export default svgResultCarbonIcon;
