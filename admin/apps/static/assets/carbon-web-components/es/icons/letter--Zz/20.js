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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M25 15L25 13 17 13 17 15 22.5 15 17 21 17 23 25 23 25 21 19.51 21 25 15zM15 9L7 9 7 11 13 11 7 21 7 23 15 23 15 21 9 21 15 11 15 9z"></path></svg>`;
export default svgResultCarbonIcon;
