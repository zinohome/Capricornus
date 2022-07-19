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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M27,28v-10.48a2.0035,2.0035,0,0,0-.853-1.6387L17,9.48V8h6V2H15V9.48L5.8528,15.8823A2.0023,2.0023,0,0,0,5,17.5205V28H2v2H30V28ZM17,4h4V6H17ZM7,17.5205l9-6.3,9,6.3V28H17V20H15v8H7Z"></path></svg>`;
export default svgResultCarbonIcon;
