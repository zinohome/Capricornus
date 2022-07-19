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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M4 20L4 22 8.586 22 2 28.586 3.414 30 10 23.414 10 28 12 28 12 20 4 20zM20 22H24V24H20zM16 18H20V20H16zM20 14H24V16H20zM8 14H12V16H8z"></path><path d="M27,3H5A2.0027,2.0027,0,0,0,3,5V16H5V11H27V27H16v2H27a2.0027,2.0027,0,0,0,2-2V5A2.0027,2.0027,0,0,0,27,3Zm0,6H5V5H27Z"></path></svg>`;
export default svgResultCarbonIcon;
