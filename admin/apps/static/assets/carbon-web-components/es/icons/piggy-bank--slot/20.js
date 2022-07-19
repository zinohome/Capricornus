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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M13 11H20V13H13z"></path><path d="M29,13H26.98A5.7791,5.7791,0,0,0,25,8.8525V5a1,1,0,0,0-1.6-.8L19.6665,7H15c-5.5095,0-9.4634,3.2412-9.9485,8H5a1.0009,1.0009,0,0,1-1-1V12H2v2a3.0033,3.0033,0,0,0,3,3h.07A9.1733,9.1733,0,0,0,9,23.5566V27a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V25h3v2a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V23.6372A5.0928,5.0928,0,0,0,26.8188,20H29a1,1,0,0,0,1-1V14A1,1,0,0,0,29,13Zm-1,5H25.124c-.3052,2.7529-.8235,3.4854-3.124,4.3154V26H20V23H13v3H11V22.3779A7.0129,7.0129,0,0,1,7,16c0-4.8354,4.0181-7,8-7h5.3335L23,7V9.7764c2.4182,1.8593,1.9126,3.186,2.0183,5.2236H28Z"></path></svg>`;
export default svgResultCarbonIcon;
