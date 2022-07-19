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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M30,15H28V7H13V5H28a2.0023,2.0023,0,0,1,2,2Z"></path><path d="M25,20H23V12H8V10H23a2.0023,2.0023,0,0,1,2,2Z"></path><path d="M18,27H4a2.0023,2.0023,0,0,1-2-2V17a2.0023,2.0023,0,0,1,2-2H18a2.0023,2.0023,0,0,1,2,2v8A2.0023,2.0023,0,0,1,18,27ZM4,17v8H18.0012L18,17Z"></path></svg>`;
export default svgResultCarbonIcon;
