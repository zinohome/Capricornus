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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M6 13L6 7.414 15 16.414 15 28 17 28 17 16.414 26 7.414 26 13 28 13 28 4 19 4 19 6 24.586 6 16 14.586 7.414 6 13 6 13 4 4 4 4 13 6 13z"></path></svg>`;
export default svgResultCarbonIcon;
