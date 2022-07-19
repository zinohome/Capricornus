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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M21,29H5a2,2,0,0,1-2-2V5A2,2,0,0,1,5,3H21V5H5V27H21Z"></path><path d="M15 9H17V23H15zM27 9H29V23H27zM21 9H23V23H21z"></path></svg>`;
export default svgResultCarbonIcon;
