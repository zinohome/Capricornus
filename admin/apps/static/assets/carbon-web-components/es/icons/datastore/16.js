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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<circle cx="23" cy="23" r="1"></circle><path d="M8 22H20V24H8z"></path><circle cx="23" cy="9" r="1"></circle><path d="M8 8H20V10H8z"></path><path d="M26,14a2,2,0,0,0,2-2V6a2,2,0,0,0-2-2H6A2,2,0,0,0,4,6v6a2,2,0,0,0,2,2H8v4H6a2,2,0,0,0-2,2v6a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V20a2,2,0,0,0-2-2H24V14ZM6,6H26v6H6ZM26,26H6V20H26Zm-4-8H10V14H22Z"></path></svg>`;
export default svgResultCarbonIcon;
