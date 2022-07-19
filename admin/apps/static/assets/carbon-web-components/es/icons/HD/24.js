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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M28,6H4A2,2,0,0,0,2,8V24a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V8A2,2,0,0,0,28,6ZM4,24V8H28V24Z"></path><path d="M22 11H18V21h4a3 3 0 003-3V14A3 3 0 0022 11zm1 7a1 1 0 01-1 1H20V13h2a1 1 0 011 1zM13 11L13 15 10 15 10 11 8 11 8 21 10 21 10 17 13 17 13 21 15 21 15 11 13 11z"></path></svg>`;
export default svgResultCarbonIcon;
