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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M4 23H12V25H4zM24.5232 14H4v2H24.5a3.5 3.5 0 010 7H18.8281l2.586-2.5859L20 19l-5 5 5 5 1.4141-1.4141L18.8281 25H24.533a5.5 5.5 0 00-.01-11zM4 5H28V7H4z"></path></svg>`;
export default svgResultCarbonIcon;
