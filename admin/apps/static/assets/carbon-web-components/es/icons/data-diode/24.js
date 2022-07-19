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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M30,15H27V7H25v8H22V7H20v7.8262L7.5239,7.1484A1,1,0,0,0,6,8v7H2v2H6v7a1,1,0,0,0,1.5239.8516L20,17.1738V25h2V17h3v8h2V17h3ZM8,22.21V9.79L18.0918,16Z"></path></svg>`;
export default svgResultCarbonIcon;
