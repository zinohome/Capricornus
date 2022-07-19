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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M20 6H30V8H20zM20 12H27V14H20zM20 18H30V20H20zM20 24H27V26H20zM14 4H16V28H14zM3.85 22.5L2.44 21.12 8.73 15 2.44 8.88 3.85 7.5 11.56 15 3.85 22.5z"></path></svg>`;
export default svgResultCarbonIcon;
