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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M29.707,19.293l-3-3a.9994.9994,0,0,0-1.414,0L16,25.5859V30h4.4141l9.2929-9.293A.9994.9994,0,0,0,29.707,19.293ZM19.5859,28H18V26.4141l5-5L24.5859,23ZM26,21.5859,24.4141,20,26,18.4141,27.5859,20Z"></path><path d="M17 15H21V17H17z" transform="rotate(-90 19 16)"></path><path d="M12 14H18V16H12z" transform="rotate(-90 15 15)"></path><path d="M6 12H16V14H6z" transform="rotate(-90 11 13)"></path><path d="M12,30H6a2.0021,2.0021,0,0,1-2-2V4A2.0021,2.0021,0,0,1,6,2H22a2.0021,2.0021,0,0,1,2,2V14H22V4H6V28h6Z"></path></svg>`;
export default svgResultCarbonIcon;
