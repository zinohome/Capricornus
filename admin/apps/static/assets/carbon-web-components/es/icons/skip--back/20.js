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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M27 28a1 1 0 01-.5-.13l-19-11a1 1 0 010-1.74l19-11a1 1 0 011 0A1 1 0 0128 5V27a1 1 0 01-1 1zM10 16l16 9.27V6.73zM2 4H4V28H2z"></path></svg>`;
export default svgResultCarbonIcon;
