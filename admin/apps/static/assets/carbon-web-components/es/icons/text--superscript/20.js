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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M29 17L23 17 23 11 27 11 27 9 23 9 23 7 29 7 29 13 25 13 25 15 29 15 29 17zM4 7L4 9 11 9 11 25 13 25 13 9 20 9 20 7 4 7z"></path></svg>`;
export default svgResultCarbonIcon;
