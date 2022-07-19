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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M18 28H26V30H18zM18 24H30V26H18zM18 20H30V22H18z"></path><path d="M16.001 26.473L16 26.473 4.284 12.955 9.5 6 22.5 6 27.716 12.955 24.476 16.692 25.989 18.002 30.284 13.045 23.5 4 8.5 4 1.716 13.045 14.488 27.782 16.001 26.473z"></path></svg>`;
export default svgResultCarbonIcon;
