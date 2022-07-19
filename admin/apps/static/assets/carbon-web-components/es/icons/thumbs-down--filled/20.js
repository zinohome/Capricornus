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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M2 2H7V16H2zM23 2H9V16.8027l3.0422 4.5635.8453 5.9165A2.0094 2.0094 0 0014.8672 29H15a3.0033 3.0033 0 003-3V20h8a4.0045 4.0045 0 004-4V9A7.0078 7.0078 0 0023 2z"></path></svg>`;
export default svgResultCarbonIcon;
