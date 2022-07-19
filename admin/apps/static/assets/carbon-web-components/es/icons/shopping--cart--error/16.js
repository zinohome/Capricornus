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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<circle cx="10" cy="28" r="2"></circle><circle cx="24" cy="28" r="2"></circle><path d="M4.9806,2.8039A1,1,0,0,0,4,2H0V4H3.18L7.0194,23.1961A1,1,0,0,0,8,24H26V22H8.82l-.8-4H26a1,1,0,0,0,.9762-.783L29.2445,7H27.1971l-1.9989,9H7.62Z"></path><path d="M17,2a6,6,0,1,0,6,6A6.0066,6.0066,0,0,0,17,2Zm0,2a3.9521,3.9521,0,0,1,2.019.5669L13.5669,10.019A3.9529,3.9529,0,0,1,13,8,4.0045,4.0045,0,0,1,17,4Zm0,8a3.9521,3.9521,0,0,1-2.019-.5669L20.4331,5.981A3.9529,3.9529,0,0,1,21,8,4.0045,4.0045,0,0,1,17,12Z"></path></svg>`;
export default svgResultCarbonIcon;
