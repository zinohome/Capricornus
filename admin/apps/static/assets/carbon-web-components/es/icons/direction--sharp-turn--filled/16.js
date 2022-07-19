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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M28,2H4A2,2,0,0,0,2,4V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V4A2,2,0,0,0,28,2ZM26,26H16V24h6.5859L8,9.4141V26H6V7a1,1,0,0,1,1.707-.707L24,22.5859V16h2Z"></path><path fill="none" d="M26,26H16V24h6.5859L8,9.4141V26H6V7a1,1,0,0,1,1.707-.707L24,22.5859V16h2Z" data-icon-path="inner-path"></path></svg>`;
export default svgResultCarbonIcon;
