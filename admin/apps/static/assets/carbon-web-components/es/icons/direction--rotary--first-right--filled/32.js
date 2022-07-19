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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<circle cx="11" cy="11" r="3"></circle><path d="M28,2H4A2,2,0,0,0,2,4V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V4A2,2,0,0,0,28,2ZM26,26H16V24h6.5859l-8.833-8.833A4.9678,4.9678,0,0,1,12,15.8989V26H10V15.8989a5.0113,5.0113,0,1,1,5.167-2.146L24,22.5859V16h2Z"></path><path fill="none" d="M11,14a3,3,0,1,1,3-3A3.0033,3.0033,0,0,1,11,14Zm13,2v6.5859l-8.833-8.833A4.9959,4.9959,0,1,0,10,15.8989V26h2V15.8989a4.9678,4.9678,0,0,0,1.7529-.7319L22.5859,24H16v2H26V16Z" data-icon-path="inner-path"></path></svg>`;
export default svgResultCarbonIcon;
