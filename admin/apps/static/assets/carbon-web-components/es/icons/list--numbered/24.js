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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M16 22H30V24H16zM16 8H30V10H16zM8 12L8 4 6 4 6 5 4 5 4 7 6 7 6 12 4 12 4 14 6 14 8 14 10 14 10 12 8 12zM10 28H4V24a2 2 0 012-2H8V20H4V18H8a2 2 0 012 2v2a2 2 0 01-2 2H6v2h4z"></path></svg>`;
export default svgResultCarbonIcon;
