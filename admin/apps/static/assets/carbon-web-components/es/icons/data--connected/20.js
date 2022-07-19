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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M30 30L24 30 24 28 28 28 28 4 24 4 24 2 30 2 30 30z"></path><path d="M24.91,19.59a4.51,4.51,0,0,0-2.66-3.24,4.55,4.55,0,0,0-3.5,0,4.94,4.94,0,0,0-.64.35L15.3,13.89a4.53,4.53,0,1,0-1.41,1.41l2.81,2.81a4.48,4.48,0,0,0-.61,3.3,4.51,4.51,0,0,0,2.66,3.24,4.55,4.55,0,0,0,3.5,0,4.51,4.51,0,0,0,2.66-3.24,4.65,4.65,0,0,0,0-1.82ZM11.5,14A2.5,2.5,0,1,1,14,11.5,2.5,2.5,0,0,1,11.5,14Z"></path><path d="M8 30L2 30 2 2 8 2 8 4 4 4 4 28 8 28 8 30z"></path></svg>`;
export default svgResultCarbonIcon;
