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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M13 15L13 23 13 23 20 19 13 15z"></path><path d="M26 28H6a2.0021 2.0021 0 01-2-2V12a2.0021 2.0021 0 012-2H26a2.0021 2.0021 0 012 2V26A2.0021 2.0021 0 0126 28zM6 12V26H26V12zM6 6H26V8H6zM8 2H24V4H8z"></path></svg>`;
export default svgResultCarbonIcon;
