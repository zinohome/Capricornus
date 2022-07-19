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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M24.271 5L22 5 16 16 10 5 7.729 5 13.794 16 8 16 8 18 15 18 15 21 8 21 8 23 15 23 15 27 17 27 17 23 24 23 24 21 17 21 17 18 24 18 24 16 18.206 16 24.271 5z"></path></svg>`;
export default svgResultCarbonIcon;
