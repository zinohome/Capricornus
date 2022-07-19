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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M30,19H26V15H24v9H8V8l9-.0009V6H13V2H11V6H8A2.002,2.002,0,0,0,6,8v3H2v2H6v6H2v2H6v3a2.0023,2.0023,0,0,0,2,2h3v4h2V26h6v4h2V26h3a2.0027,2.0027,0,0,0,2-2V21h4Z"></path><path d="M26,2a4.0042,4.0042,0,0,0-4,4,3.9556,3.9556,0,0,0,.5668,2.0192L19.5859,11H11V21H21V12.4141l2.9808-2.9808A3.9553,3.9553,0,0,0,26,10a4,4,0,0,0,0-8ZM19,19H13V13h6ZM26,8a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,26,8Z"></path></svg>`;
export default svgResultCarbonIcon;
