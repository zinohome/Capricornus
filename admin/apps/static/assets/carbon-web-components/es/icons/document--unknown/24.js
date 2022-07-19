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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<circle cx="9" cy="28.5" r="1.5"></circle><path d="M10,25H8V21h2a2,2,0,0,0,0-4H8a2.0023,2.0023,0,0,0-2,2v.5H4V19a4.0045,4.0045,0,0,1,4-4h2a4,4,0,0,1,0,8Z"></path><path d="M27.7,9.3l-7-7A.9085.9085,0,0,0,20,2H10A2.0058,2.0058,0,0,0,8,4v8h2V4h8v6a2.0058,2.0058,0,0,0,2,2h6V28H14v2H26a2.0058,2.0058,0,0,0,2-2V10A.9092.9092,0,0,0,27.7,9.3ZM20,10V4.4L25.6,10Z"></path></svg>`;
export default svgResultCarbonIcon;
