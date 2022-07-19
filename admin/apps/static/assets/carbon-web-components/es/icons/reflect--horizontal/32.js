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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M19.386,15.2105l9-7A1,1,0,0,1,30,9V23a1,1,0,0,1-1.614.79l-9-7a1,1,0,0,1,0-1.5791Z"></path><path d="M15 2H17V30H15z" transform="rotate(-180 16 16)"></path><path d="M13,16a1.001,1.001,0,0,1-.386.79l-9,7A1,1,0,0,1,2,23V9a1,1,0,0,1,1.614-.79l9,7A1.001,1.001,0,0,1,13,16ZM4,20.9556,10.3711,16,4,11.0444Z"></path></svg>`;
export default svgResultCarbonIcon;
