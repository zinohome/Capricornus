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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M22,15V10H20v7h2a3,3,0,0,1,0,6H21V21H19v2a3,3,0,0,1-6,0V21H11v2H10a3,3,0,0,1,0-6h2V9a3,3,0,0,1,3-3h1V4H15a5,5,0,0,0-5,5v6a5,5,0,0,0,0,10h1.42a5,5,0,0,0,9.16,0H22a5,5,0,0,0,0-10Z"></path></svg>`;
export default svgResultCarbonIcon;
