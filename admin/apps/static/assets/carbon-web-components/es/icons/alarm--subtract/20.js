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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M16,28A11,11,0,1,1,27,17,11,11,0,0,1,16,28ZM16,8a9,9,0,1,0,9,9A9,9,0,0,0,16,8Z"></path><path d="M3.96 5.5H9.030000000000001V7.5H3.96z" transform="rotate(-45.06 6.502 6.497)"></path><path d="M24.5 3.96H26.5V9.030000000000001H24.5z" transform="rotate(-44.94 25.5 6.498)"></path><path d="M11 16H21V18H11z"></path></svg>`;
export default svgResultCarbonIcon;
