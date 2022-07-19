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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M19 28H3a1 1 0 010-2H19a1 1 0 010 2zM15 20H3a1 1 0 010-2H15a1 1 0 010 2z"></path><path d="M24.5 23.5H28.5V25.5H24.5z" transform="rotate(45 26.5 24.5)"></path><path d="M28 15H32V17H28z"></path><path d="M24.5 6.5H28.5V8.5H24.5z" transform="rotate(-45 26.5 7.5)"></path><path d="M17 2H19V6H17z"></path><path d="M7.5 6.5H11.5V8.5H7.5z" transform="rotate(-135 9.5 7.5)"></path><path d="M18,8a8.0092,8.0092,0,0,0-8,8h2a6,6,0,1,1,6,6H7a1,1,0,0,0,0,2H18A8,8,0,0,0,18,8Z"></path></svg>`;
export default svgResultCarbonIcon;
