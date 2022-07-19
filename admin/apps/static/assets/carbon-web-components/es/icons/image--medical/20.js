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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M26,6V26H6V6H26m0-2H6A2,2,0,0,0,4,6V26a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V6a2,2,0,0,0-2-2Z"></path><path d="M22 16L22 14 17 14 17 12 20 12 20 10 17 10 17 8 15 8 15 10 12 10 12 12 15 12 15 14 10 14 10 16 15 16 15 18 10 18 10 20 15 20 15 22 12 22 12 24 20 24 20 22 17 22 17 20 22 20 22 18 17 18 17 16 22 16z"></path></svg>`;
export default svgResultCarbonIcon;
