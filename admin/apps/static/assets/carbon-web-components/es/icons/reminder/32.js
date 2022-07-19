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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M30,23.3818l-2-1V20a6.0046,6.0046,0,0,0-5-5.91V12H21v2.09A6.0046,6.0046,0,0,0,16,20v2.3818l-2,1V28h6v2h4V28h6ZM28,26H16V24.6182l2-1V20a4,4,0,0,1,8,0v3.6182l2,1Z"></path><path d="M28,6a2,2,0,0,0-2-2H22V2H20V4H12V2H10V4H6A2,2,0,0,0,4,6V26a2,2,0,0,0,2,2h4V26H6V6h4V8h2V6h8V8h2V6h4v6h2Z"></path></svg>`;
export default svgResultCarbonIcon;
