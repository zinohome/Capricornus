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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M16 18H6a2 2 0 01-2-2V6A2 2 0 016 4H16a2 2 0 012 2V16A2 2 0 0116 18zM6 6V16H16V6zM26 12v4H22V12h4m0-2H22a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2V12a2 2 0 00-2-2zM26 22v4H22V22h4m0-2H22a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2V22a2 2 0 00-2-2zM16 22v4H12V22h4m0-2H12a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2V22a2 2 0 00-2-2z"></path></svg>`;
export default svgResultCarbonIcon;
