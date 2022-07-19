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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M26 10V22a2 2 0 01-2 2H8a2 2 0 01-2-2V10A2 2 0 018 8H24A2 2 0 0126 10zM8 22H24V10H8zM24 28v4H22V28H10v4H8V28a2 2 0 012-2H22A2 2 0 0124 28zM24 0V4a2 2 0 01-2 2H10A2 2 0 018 4V0h2V4H22V0z"></path></svg>`;
export default svgResultCarbonIcon;
