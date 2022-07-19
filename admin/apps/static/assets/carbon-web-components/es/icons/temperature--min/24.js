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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M20 4H27V6H20zM20 10H30V12H20zM20 16H27V18H20zM12 23a3 3 0 01-6 0z"></path><path d="M30,22H15.9192A7.0107,7.0107,0,0,0,14,18.1108V7A5,5,0,0,0,4,7V18.1108A6.9946,6.9946,0,1,0,15.92,24H30ZM9,28a4.9933,4.9933,0,0,1-3.332-8.7183L6,18.9834V7a3,3,0,0,1,6,0V18.9834l.332.2983A4.9933,4.9933,0,0,1,9,28Z"></path></svg>`;
export default svgResultCarbonIcon;
