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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M12 4H6A2 2 0 004 6v6a2 2 0 002 2h6a2 2 0 002-2V6A2 2 0 0012 4zm0 8H6V6h6zM26 4H20a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2V6A2 2 0 0026 4zm0 8H20V6h6zM12 18H6a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2V20A2 2 0 0012 18zm0 8H6V20h6zM26 18H20a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2V20A2 2 0 0026 18zm0 8H20V20h6z"></path></svg>`;
export default svgResultCarbonIcon;
