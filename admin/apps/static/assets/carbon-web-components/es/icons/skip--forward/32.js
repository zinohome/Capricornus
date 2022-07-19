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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M5 28a1 1 0 01-1-1V5a1 1 0 01.5-.87 1 1 0 011 0l19 11a1 1 0 010 1.74l-19 11A1 1 0 015 28zM6 6.73V25.27L22 16zM28 4H30V28H28z"></path></svg>`;
export default svgResultCarbonIcon;
