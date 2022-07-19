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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M24,10a6,6,0,0,0-4.46,10H12.46A6,6,0,1,0,8,22H24a6,6,0,0,0,0-12ZM4,16a4,4,0,1,1,4,4A4,4,0,0,1,4,16Zm20,4a4,4,0,1,1,4-4A4,4,0,0,1,24,20Z"></path></svg>`;
export default svgResultCarbonIcon;
