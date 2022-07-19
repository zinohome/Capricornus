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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M24,20l-1.41,1.41L26.17,25H10a4,4,0,0,1,0-8H22A6,6,0,0,0,22,5H5.83L9.41,1.41,8,0,2,6l6,6,1.41-1.41L5.83,7H22a4,4,0,0,1,0,8H10a6,6,0,0,0,0,12H26.17l-3.58,3.59L24,32l6-6Z"></path></svg>`;
export default svgResultCarbonIcon;
