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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M4 24H28V26H4zM26 18H6V14H26v4m2 0V14a2 2 0 00-2-2H6a2 2 0 00-2 2v4a2 2 0 002 2H26a2 2 0 002-2zM4 6H28V8H4z"></path></svg>`;
export default svgResultCarbonIcon;
