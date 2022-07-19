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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M28 2H30V30H28zM24 22H20a2.0021 2.0021 0 01-2-2V12a2.0021 2.0021 0 012-2h4a2.0021 2.0021 0 012 2v8A2.0021 2.0021 0 0124 22zM20 12h-.0015L20 20h4V12zM12 2H14V30H12zM8 26H4a2.0021 2.0021 0 01-2-2V8A2.0021 2.0021 0 014 6H8a2.0021 2.0021 0 012 2V24A2.0021 2.0021 0 018 26zM4 8H3.9985L4 24H8V8z"></path></svg>`;
export default svgResultCarbonIcon;
