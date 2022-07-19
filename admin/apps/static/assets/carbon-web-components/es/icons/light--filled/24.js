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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M15 2H17V7H15z"></path><path d="M21.668 6.854H26.625999999999998V8.854H21.668z" transform="rotate(-45 24.147 7.853)"></path><path d="M25 15H30V17H25z"></path><path d="M23.147 21.668H25.147V26.625999999999998H23.147z" transform="rotate(-45 24.147 24.146)"></path><path d="M15 25H17V30H15z"></path><path d="M5.375 23.147H10.333V25.147H5.375z" transform="rotate(-45 7.853 24.146)"></path><path d="M2 15H7V17H2z"></path><path d="M6.854 5.375H8.854V10.333H6.854z" transform="rotate(-45 7.854 7.853)"></path><path d="M16,10a6,6,0,1,0,6,6,6,6,0,0,0-6-6Z"></path></svg>`;
export default svgResultCarbonIcon;
