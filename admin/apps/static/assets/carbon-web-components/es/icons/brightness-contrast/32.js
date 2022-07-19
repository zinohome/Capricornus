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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M15 2H17V5H15zM27 15H30V17H27zM15 27H17V30H15zM2 15H5V17H2z"></path><path d="M6.22 5.73H8.219999999999999V8.73H6.22z" transform="rotate(-45 7.227 7.236)"></path><path d="M23.27 6.23H26.27V8.23H23.27z" transform="rotate(-45 24.766 7.232)"></path><path d="M23.77 23.27H25.77V26.27H23.77z" transform="rotate(-45 24.77 24.77)"></path><path d="M5.47 25.13L7.59 23 9 24.42 6.88 26.54 5.47 25.13zM16 8a8 8 0 108 8A8 8 0 0016 8zm0 14a6 6 0 010-12z"></path></svg>`;
export default svgResultCarbonIcon;
