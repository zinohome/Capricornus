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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M2 9h9V2H2zM4 4H9V7H4zM2 19h9V12H2zm2-5H9v3H4zM2 29h9V22H2zm2-5H9v3H4zM27 9H18l3.41-3.59L20 4l-6 6 6 6 1.41-1.41L18 11h9a1 1 0 011 1V24a1 1 0 01-1 1H15v2H27a3 3 0 003-3V12A3 3 0 0027 9z"></path></svg>`;
export default svgResultCarbonIcon;
