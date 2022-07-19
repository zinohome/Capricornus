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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M14 4H9V6h5V8H10a2 2 0 00-2 2v2a2 2 0 002 2h6V6A2.0023 2.0023 0 0014 4zm0 8H10V10h4zM22 26L22 18 20 18 20 19 18 19 18 21 20 21 20 26 18 26 18 28 24 28 24 26 22 26zM2 2H4V16H2zM28 16H30V30H28z"></path></svg>`;
export default svgResultCarbonIcon;
