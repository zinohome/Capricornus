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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2ZM9,13.5A2.5,2.5,0,1,1,11.5,16,2.5,2.5,0,0,1,9,13.5ZM22,22H10V20H22Zm-1.5-6A2.5,2.5,0,1,1,23,13.5,2.5,2.5,0,0,1,20.5,16Z"></path></svg>`;
export default svgResultCarbonIcon;
