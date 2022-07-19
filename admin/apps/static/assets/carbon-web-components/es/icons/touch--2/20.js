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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M29,15H27A11,11,0,0,0,5,15H3a13,13,0,0,1,26,0Z"></path><path d="M25,28H23V15A7,7,0,1,0,9,15V28H7V15a9,9,0,0,1,18,0Z"></path><path d="M21,20H11V15a5,5,0,0,1,10,0Zm-8-2h6V15a3,3,0,0,0-6,0Z"></path></svg>`;
export default svgResultCarbonIcon;
