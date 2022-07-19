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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M16 8H30V10H16zM6 10.59L3.41 8 2 9.41 6 13.41 14 5.41 12.59 4 6 10.59zM16 22H30V24H16zM6 24.59L3.41 22 2 23.41 6 27.41 14 19.41 12.59 18 6 24.59z"></path></svg>`;
export default svgResultCarbonIcon;
