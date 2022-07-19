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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M14.9 7.2H17.1V24.799H14.9z" transform="rotate(-45 16 16)"></path><path d="M16,2A13.9138,13.9138,0,0,0,2,16,13.9138,13.9138,0,0,0,16,30,13.9138,13.9138,0,0,0,30,16,13.9138,13.9138,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12.0353,12.0353,0,0,1,16,28Z"></path></svg>`;
export default svgResultCarbonIcon;
