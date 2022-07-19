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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M15 10H17V18H15zM20 14H22V18H20zM10 12H12V18H10z"></path><path d="M25,4H17V2H15V4H7A2,2,0,0,0,5,6V20a2,2,0,0,0,2,2h8v6H11v2H21V28H17V22h8a2,2,0,0,0,2-2V6A2,2,0,0,0,25,4Zm0,16H7V6H25Z"></path></svg>`;
export default svgResultCarbonIcon;
