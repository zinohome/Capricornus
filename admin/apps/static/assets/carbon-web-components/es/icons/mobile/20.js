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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M22,4H10A2.002,2.002,0,0,0,8,6V28a2.0023,2.0023,0,0,0,2,2H22a2.0027,2.0027,0,0,0,2-2V6A2.0023,2.0023,0,0,0,22,4Zm0,2,0,2H10V6ZM10,28V10H22l0,18Z"></path></svg>`;
export default svgResultCarbonIcon;
