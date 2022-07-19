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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M28 16v6H4V6H15V4H4A2 2 0 002 6V22a2 2 0 002 2h8v4H8v2H24V28H20V24h8a2 2 0 002-2V16zM18 28H14V24h4zM18 4H30V6H18z"></path><path d="M18 8H30V10H18zM18 12H24V14H18z"></path></svg>`;
export default svgResultCarbonIcon;
