/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { svg } from 'lit-html';
import spread from '../../../globals/directives/spread';
const svgResultCarbonIcon = ({ children, ...attrs } = {}) =>
  svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${spread(
    attrs
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M16,28H4a1.89,1.89,0,0,1-2-2V14a1.89,1.89,0,0,1,2-2H16a1.89,1.89,0,0,1,2,2V26A1.89,1.89,0,0,1,16,28ZM4,14V26H16V14Z"></path><path d="M22,19H20V10H10V8H20a1.89,1.89,0,0,1,2,2Z"></path><path d="M26 14H24V6H16V4h8a1.89 1.89 0 012 2zM24 17L24 19 26.8 19 22 24.4 22 22 20 22 20 28 26 28 26 26 23.2 26 28 20.6 28 23 30 23 30 17 24 17z"></path></svg>`;
export default svgResultCarbonIcon;
