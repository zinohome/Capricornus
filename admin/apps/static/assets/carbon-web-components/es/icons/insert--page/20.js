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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M26 30H24V20H12V30H10V20a2.0021 2.0021 0 012-2H24a2.0021 2.0021 0 012 2zM5.17 16L2 19.17 3.411 20.589 8 16 3.42 11.42 2 12.83 5.17 16zM24 14H12a2.0021 2.0021 0 01-2-2V2h2V12H24V2h2V12A2.0021 2.0021 0 0124 14z"></path></svg>`;
export default svgResultCarbonIcon;
