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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M12 10H14V14H12zM18 18H22V20H18zM14 18L14 16 12 16 12 20 16 20 16 18 14 18zM16 4H28V16H16z"></path><path d="M17.885 29.997L11.819 26.142 4 27.989 4 4 14 4 14 8 12 8 12 6 6 6 6 25.461 12.181 24.001 18.115 27.773 22.818 26 26 26 26 20 24 20 24 18 28 18 28 28 23.182 28 17.885 29.997z"></path></svg>`;
export default svgResultCarbonIcon;
