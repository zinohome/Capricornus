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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M25,11H15a1,1,0,0,0-1,1v4a6.0046,6.0046,0,0,0,5,5.91V28H16v2h8V28H21V21.91A6.0046,6.0046,0,0,0,26,16V12A1,1,0,0,0,25,11Zm-1,5a4,4,0,0,1-8,0V13h8Z"></path><path d="M15,1H10A1,1,0,0,0,9,2V9.3706A6.09,6.09,0,0,0,6,15V29a1,1,0,0,0,1,1h5V28H8V15c0-3.1875,2.231-4.02,2.3164-4.0513L11,10.7207V3h3V8h2V2A1,1,0,0,0,15,1Z"></path></svg>`;
export default svgResultCarbonIcon;
