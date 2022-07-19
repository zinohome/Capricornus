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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M20,2H12A9.9842,9.9842,0,0,0,7.0349,20.6553C7.0249,20.7705,7,20.8818,7,21a3.9929,3.9929,0,0,0,2.9106,3.83A4.0049,4.0049,0,0,1,6,28H4v2H6a6.0044,6.0044,0,0,0,5.928-5.12,3.9966,3.9966,0,0,0,2.93-2.88H20A10,10,0,0,0,20,2ZM11,23a2,2,0,1,1,2-2A2.0025,2.0025,0,0,1,11,23Zm9-3H14.8579a3.9841,3.9841,0,0,0-7.15-1.2637A7.99,7.99,0,0,1,12,4h8a8,8,0,0,1,0,16Z"></path></svg>`;
export default svgResultCarbonIcon;
