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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M28 14L28 12 23.045 12 24 5 22 5 20 23 17 8 15 8 12 23 10 5 8 5 8.955 12 4 12 4 14 9.227 14 9.636 17 4 17 4 19 9.909 19 11 27 13 27 16 12 19 27 21 27 22.091 19 28 19 28 17 22.364 17 22.773 14 28 14z"></path></svg>`;
export default svgResultCarbonIcon;
