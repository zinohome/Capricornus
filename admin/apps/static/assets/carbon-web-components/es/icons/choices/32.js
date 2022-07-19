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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M28 13L28 4 19 4 19 6 24.586 6 16 14.586 7.414 6 13 6 13 4 4 4 4 13 6 13 6 7.414 15 16.414 15 26 4 26 4 28 28 28 28 26 17 26 17 16.414 26 7.414 26 13 28 13z"></path></svg>`;
export default svgResultCarbonIcon;
