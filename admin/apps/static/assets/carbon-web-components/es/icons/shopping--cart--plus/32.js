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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<circle cx="10" cy="28" r="2"></circle><circle cx="24" cy="28" r="2"></circle><path d="M4.9806,2.8039A1,1,0,0,0,4,2H0V4H3.18L7.0194,23.1961A1,1,0,0,0,8,24H26V22H8.82l-.8-4H26a1,1,0,0,0,.9762-.783L29.2445,7H27.1971l-1.9989,9H7.62Z"></path><path d="M18 6L18 2 16 2 16 6 12 6 12 8 16 8 16 12 18 12 18 8 22 8 22 6 18 6z"></path></svg>`;
export default svgResultCarbonIcon;
