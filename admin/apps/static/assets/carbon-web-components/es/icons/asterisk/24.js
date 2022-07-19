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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M28.316 13.949L27.684 12.051 17 15.612 17 4 15 4 15 15.612 4.316 12.051 3.684 13.949 14.368 17.51 7.2 27.066 8.8 28.267 16 18.667 23.2 28.267 24.8 27.066 17.632 17.51 28.316 13.949z"></path></svg>`;
export default svgResultCarbonIcon;
