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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16">${children}<path d="M4,8c-1.2,0-2,0.8-2,2c0,1.2,0.8,2,2,2h3v1H4c-1.7,0-3-1.2-3-3c0-1.7,1.3-3,3-3l9.1,0l-2-2l0.7-0.7	L15,7.5l-3.2,3.2L11.1,10l2-2L4,8z"></path></svg>`;
export default svgResultCarbonIcon;
