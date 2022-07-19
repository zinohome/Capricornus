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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M20 26H26V28H20zM20 18H28V20H20zM20 10H30V12H20zM15 4H17V28H15zM10.586 3.959L7 7.249 3.412 3.958 2 5.373 7 10 12 5.373 10.586 3.959z"></path></svg>`;
export default svgResultCarbonIcon;
