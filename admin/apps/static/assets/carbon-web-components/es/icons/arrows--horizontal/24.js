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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M11.41 26.59L7.83 23 28 23 28 21 7.83 21 11.41 17.41 10 16 4 22 10 28 11.41 26.59zM28 10L22 4 20.59 5.41 24.17 9 4 9 4 11 24.17 11 20.59 14.59 22 16 28 10z"></path></svg>`;
export default svgResultCarbonIcon;
