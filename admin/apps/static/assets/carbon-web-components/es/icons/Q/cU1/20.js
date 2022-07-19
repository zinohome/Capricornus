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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M10 23H5a2 2 0 01-2-2V15a2 2 0 012-2h5v2H5v6h5zM18 23H14a2 2 0 01-2-2V9h2V21h4V9h2V21A2 2 0 0118 23zM27 21L27 9.01 22 9.01 22 11.01 25 11.01 25 21 22 21 22 23 30 23 30 21 27 21z"></path></svg>`;
export default svgResultCarbonIcon;
