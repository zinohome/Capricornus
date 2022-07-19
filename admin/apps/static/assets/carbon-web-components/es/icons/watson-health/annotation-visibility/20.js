/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { svg } from 'lit-html';
import spread from '../../../globals/directives/spread';
const svgResultCarbonIcon = ({ children, ...attrs } = {}) =>
  svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${spread(
    attrs
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M28,4H4A2,2,0,0,0,2,6V26a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V6A2,2,0,0,0,28,4Zm0,22H4V6H28Z"></path><path d="M21 20H13a3.51 3.51 0 00-.88-1.86l3.8-6.64-1.74-1-3.78 6.62A3.35 3.35 0 009.5 17a3.5 3.5 0 103.15 5H21zM9.5 22A1.5 1.5 0 1111 20.5 1.5 1.5 0 019.5 22zM19 8H26V10H19zM19 12H23V14H19z"></path></svg>`;
export default svgResultCarbonIcon;
