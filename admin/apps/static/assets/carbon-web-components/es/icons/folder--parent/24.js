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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M28,8H16L12.5857,4.5857A2,2,0,0,0,11.1716,4H4A2,2,0,0,0,2,6V26a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V16.83l2.59,2.58L22,18l-5-5-5,5,1.41,1.41L16,16.83V26H4V6h7.1716l4,4H28V26H22v2h6a2,2,0,0,0,2-2V10A2,2,0,0,0,28,8Z"></path></svg>`;
export default svgResultCarbonIcon;
