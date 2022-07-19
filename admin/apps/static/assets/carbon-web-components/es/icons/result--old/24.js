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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M10 13H12V15H10zM14 13H22V15H14zM10 18H12V20H10zM10 23H12V25H10z"></path><path d="M7,28V7h3v3H22V7h3v8h2V7a2,2,0,0,0-2-2H22V4a2,2,0,0,0-2-2H12a2,2,0,0,0-2,2V5H7A2,2,0,0,0,5,7V28a2,2,0,0,0,2,2h9V28ZM12,4h8V8H12Z"></path><path d="M18,19v2.4131A6.996,6.996,0,1,1,24,32V30a5,5,0,1,0-4.5762-7H22v2H16V19Z"></path></svg>`;
export default svgResultCarbonIcon;
