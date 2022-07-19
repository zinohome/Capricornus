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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M11 24H15V26H11zM5 24H9V26H5zM23 24H27V26H23zM17 24H21V26H17zM9 22a4.92 4.92 0 014-2h6a5.22 5.22 0 014 2h2.3A6.87 6.87 0 0019 18H13a6.87 6.87 0 00-6.3 4zM24 28H26V30H24zM6 28H8V30H6zM16 16a7 7 0 117-7A7 7 0 0116 16zM16 4a5 5 0 00-5 5A5 5 0 0021 9 5 5 0 0016 4z"></path></svg>`;
export default svgResultCarbonIcon;
