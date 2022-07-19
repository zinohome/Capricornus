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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M10.8281,28H21.1719a3.43,3.43,0,0,0,3.43-3.43V10.3306h-3.43V24.57H7.3981A3.43,3.43,0,0,0,10.8281,28Z"></path><path d="M21.1719,4H10.8281a3.43,3.43,0,0,0-3.43,3.43v14.24h3.43V7.43H24.6019A3.43,3.43,0,0,0,21.1719,4Z"></path></svg>`;
export default svgResultCarbonIcon;
