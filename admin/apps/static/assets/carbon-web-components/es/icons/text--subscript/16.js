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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M26 25L20 25 20 19 24 19 24 17 20 17 20 15 26 15 26 21 22 21 22 23 26 23 26 25zM5 7L5 9 12 9 12 25 14 25 14 9 21 9 21 7 5 7z"></path></svg>`;
export default svgResultCarbonIcon;
