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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M24,2H8A2,2,0,0,0,6,4V8a2,2,0,0,0,2,2V28a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V10a2,2,0,0,0,2-2V4A2,2,0,0,0,24,2ZM10,14h3V24H10ZM22,28H10V26h5V12H10V10H22ZM8,8V4H24V8Z"></path></svg>`;
export default svgResultCarbonIcon;
