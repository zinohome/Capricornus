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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M6 8H16V10H6zM6 12H14V14H6zM6 16H10V18H6z"></path><path d="M28,26H7.4141L30,3.4141,28.5859,2l-2,2H4A2.0023,2.0023,0,0,0,2,6V22H4V6H24.5859L2,28.5859,3.4141,30l2-2H28a2.0023,2.0023,0,0,0,2-2V10H28Z"></path></svg>`;
export default svgResultCarbonIcon;
