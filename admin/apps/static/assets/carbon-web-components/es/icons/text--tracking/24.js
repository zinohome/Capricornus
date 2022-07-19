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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M25.29 19.29L23.88 20.71 26.17 23 5.83 23 8.12 20.71 6.71 19.29 2 24 6.71 28.71 8.12 27.29 5.83 25 26.17 25 23.88 27.29 25.29 28.71 30 24 25.29 19.29zM26 17h2L23 3H21L16 17h2l1-3h6zm-6.33-5L22 5l2.33 7zM14 3L10 15 6 3 4 3 9 17 11 17 16 3 14 3z"></path></svg>`;
export default svgResultCarbonIcon;
