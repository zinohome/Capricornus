/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { svg } from 'lit-html';
import spread from '../../../globals/directives/spread';
const svgResultCarbonIcon = ({ children, ...attrs } = {}) =>
  svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${spread(
    attrs
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M8 11L11 11 11 23 13 23 13 11 16 11 16 9 8 9 8 11zM24 9L22 9 22 7 20 7 20 9 18 9 18 11 20 11 20 17 21 18 22 17 22 11 24 11 24 9z"></path></svg>`;
export default svgResultCarbonIcon;
