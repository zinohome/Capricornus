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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M23,12V6H21v6a5,5,0,0,1-10,0V4h5.5859L14.293,6.293a.9994.9994,0,0,0,0,1.414L15.5859,9,13.293,11.293l1.414,1.414,3-3a.9994.9994,0,0,0,0-1.414L16.4141,7,19.707,3.707A1,1,0,0,0,19,2H10A1,1,0,0,0,9,3v9a7.0053,7.0053,0,0,0,6,6.92V28H10v2H22V28H17V18.92A7.0053,7.0053,0,0,0,23,12Z"></path></svg>`;
export default svgResultCarbonIcon;
