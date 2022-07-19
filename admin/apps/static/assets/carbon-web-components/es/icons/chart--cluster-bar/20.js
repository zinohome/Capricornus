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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M30,30H4a2,2,0,0,1-2-2V2H4V28H30Z"></path><path d="M10 16H12V26H10zM7 22H9V26H7zM26 8H28V26H26zM23 14H25V26H23z"></path><path d="M15 12H17V26H15z" transform="rotate(-180 16 19)"></path><path d="M18 18H20V26H18z" transform="rotate(-180 19 22)"></path></svg>`;
export default svgResultCarbonIcon;
