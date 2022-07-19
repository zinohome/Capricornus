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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M30 24L18.83 24 21.12 21.71 19.71 20.29 15 25 19.71 29.71 21.12 28.29 18.83 26 30 26 30 24zM14 21L20 4 18 4 12 21 14 21zM13 4L9 16 5 4 3 4 8 18 10 18 15 4 13 4zM28 18h2L25 4H23L18 18h2l1-3h6zm-6.33-5L24 6l2.33 7z"></path></svg>`;
export default svgResultCarbonIcon;
