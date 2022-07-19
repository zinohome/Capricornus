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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M23 28a5.0057 5.0057 0 01-5-5h2a3 3 0 103-3H22V18h1a5 5 0 010 10zM16 18H20V20H16zM10 18H14V20H10zM4 18H8V20H4zM21 15H20V13h1a3 3 0 10-3-3H16a5 5 0 115 5zM14 13H18V15H14zM8 13H12V15H8z"></path></svg>`;
export default svgResultCarbonIcon;
