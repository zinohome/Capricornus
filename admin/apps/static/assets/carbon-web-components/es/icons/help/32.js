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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z"></path><circle cx="16" cy="23.5" r="1.5"></circle><path d="M17,8H15.5A4.49,4.49,0,0,0,11,12.5V13h2v-.5A2.5,2.5,0,0,1,15.5,10H17a2.5,2.5,0,0,1,0,5H15v4.5h2V17a4.5,4.5,0,0,0,0-9Z"></path></svg>`;
export default svgResultCarbonIcon;
