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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M2 28H10V30H2zM2 24H10V26H2zM12 28H20V30H12zM12 24H20V26H12zM2 20H10V22H2zM12 20H20V22H12zM2 16H10V18H2zM12 16H20V18H12zM12 12H20V14H12zM12 8H20V10H12zM12 4H20V6H12zM22 28H30V30H22zM22 24H30V26H22z"></path></svg>`;
export default svgResultCarbonIcon;
