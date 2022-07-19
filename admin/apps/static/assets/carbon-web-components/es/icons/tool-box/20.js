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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M27,9H24V6a2,2,0,0,0-2-2H10A2,2,0,0,0,8,6V9H5a3,3,0,0,0-3,3V26a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V12A3,3,0,0,0,27,9ZM10,6H22V9H10ZM28,26H4V17h8v5h8V17h8ZM14,17h4v3H14ZM4,15V12a1,1,0,0,1,1-1H27a1,1,0,0,1,1,1v3Z"></path></svg>`;
export default svgResultCarbonIcon;
