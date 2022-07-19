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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M10 23H5a2 2 0 01-2-2V15a2 2 0 012-2h5v2H5v6h5zM19 23H14a2 2 0 01-2-2V15a2 2 0 012-2h5v2H14v6h5zM29 9L27 9 25 15 23 9 21 9 23.75 16 21 23 23 23 25 17 27 23 29 23 26.25 16 29 9z"></path></svg>`;
export default svgResultCarbonIcon;
