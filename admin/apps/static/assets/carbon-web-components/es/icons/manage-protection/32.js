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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M16,30,9.8242,26.7071A10.9815,10.9815,0,0,1,4,17V4A2.0022,2.0022,0,0,1,6,2H26a2.0022,2.0022,0,0,1,2,2V17a10.9815,10.9815,0,0,1-5.8242,9.7069ZM6,4V17a8.9852,8.9852,0,0,0,4.7656,7.9423L16,27.7333l5.2344-2.791A8.9852,8.9852,0,0,0,26,17V4Z"></path><path d="M16,25.277V6h8V16.8048a7,7,0,0,1-3.7,6.1731Z"></path></svg>`;
export default svgResultCarbonIcon;
