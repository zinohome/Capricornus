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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<circle cx="7" cy="7" r="1"></circle><circle cx="7" cy="15" r="1"></circle><circle cx="7" cy="23" r="1"></circle><path d="M12,26H4V20h8V18H4V12H22V4a2,2,0,0,0-2-2H4A2,2,0,0,0,2,4V26a2,2,0,0,0,2,2h8ZM4,4H20v6H4Z"></path><path d="M28,17v2.4131A6.996,6.996,0,1,0,22,30V28a5,5,0,1,1,4.5762-7H24v2h6V17Z"></path></svg>`;
export default svgResultCarbonIcon;
