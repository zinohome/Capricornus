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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<circle cx="7" cy="23" r="1"></circle><path d="M2 6H6V8H2zM8 6H12V8H8zM14 6H18V8H14zM20 6H24V8H20zM26 6H30V8H26zM28 28H4a2.0021 2.0021 0 01-2-2V20a2.0021 2.0021 0 012-2H28a2.0021 2.0021 0 012 2v6A2.0021 2.0021 0 0128 28zM4 20v6H28V20zM2 12H30V14H2z"></path></svg>`;
export default svgResultCarbonIcon;
