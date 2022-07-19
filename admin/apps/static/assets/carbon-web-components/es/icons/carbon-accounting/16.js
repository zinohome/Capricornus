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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M29 26H23V22a2.002 2.002 0 012-2h2V18H23V16h4a2.0023 2.0023 0 012 2v2a2.0023 2.0023 0 01-2 2H25v2h4zM19 22H15a2.0023 2.0023 0 01-2-2V10a2.002 2.002 0 012-2h4a2.002 2.002 0 012 2V20A2.0023 2.0023 0 0119 22zM15 10V20h4V10zM11 22H5a2.0023 2.0023 0 01-2-2V10A2.002 2.002 0 015 8h6v2H5V20h6z"></path></svg>`;
export default svgResultCarbonIcon;
