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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M17 10L15 10 15 15 10 15 10 17 15 17 15 22 17 22 17 17 22 17 22 15 17 15 17 10z"></path><path d="M30,8V2H24V4H8V2H2V8H4V24H2v6H8V28H24v2h6V24H28V8ZM26,4h2V6H26ZM4,4H6V6H4ZM6,28H4V26H6Zm22,0H26V26h2Zm-2-4H24v2H8V24H6V8H8V6H24V8h2Z"></path></svg>`;
export default svgResultCarbonIcon;
