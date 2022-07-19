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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M19 23H17V9h6a2.002 2.002 0 012 2v5a2.002 2.002 0 01-2 2H19zm0-7h4V10.9985H19zM7 11L10 11 10 23 12 23 12 11 15 11 15 9 7 9 7 11z"></path></svg>`;
export default svgResultCarbonIcon;
