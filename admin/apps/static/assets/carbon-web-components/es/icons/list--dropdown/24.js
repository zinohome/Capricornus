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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M26,6V2H2V12h9V30H30V6ZM4,10V4H24V6H11v4ZM28,28H13V8H28Z"></path><path d="M15 11H17V13H15zM19 11H26V13H19zM15 17H17V19H15zM19 17H26V19H19zM15 23H17V25H15zM19 23H26V25H19z"></path></svg>`;
export default svgResultCarbonIcon;
