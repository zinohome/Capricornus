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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M26,20H17.83l2.58-2.59L19,16l-5,5,5,5,1.41-1.41L17.83,22H26v8h2V22A2,2,0,0,0,26,20Z"></path><path d="M23.71,9.29l-7-7A1,1,0,0,0,16,2H6A2,2,0,0,0,4,4V28a2,2,0,0,0,2,2h8V28H6V4h8v6a2,2,0,0,0,2,2h6v2h2V10A1,1,0,0,0,23.71,9.29ZM16,4.41,21.59,10H16Z"></path></svg>`;
export default svgResultCarbonIcon;
