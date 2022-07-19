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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M26,24H6a2.0023,2.0023,0,0,1-2-2V8A2.002,2.002,0,0,1,6,6H26a2.0023,2.0023,0,0,1,2,2V22A2.0027,2.0027,0,0,1,26,24ZM6,8V22H26V8Z" transform="translate(0 .005)"></path><path d="M2 26.005H30V28.005H2z"></path></svg>`;
export default svgResultCarbonIcon;
