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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M2 6H12V8H2zM5 12H12V14H5zM2 18H12V20H2zM5 24H12V26H5zM16 4H18V28H16zM28.15 23.5L29.56 22.12 23.27 16 29.56 9.88 28.15 8.5 20.44 16 28.15 23.5z"></path></svg>`;
export default svgResultCarbonIcon;
