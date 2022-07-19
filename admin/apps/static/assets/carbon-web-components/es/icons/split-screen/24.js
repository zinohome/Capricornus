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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M15 4H17V28H15zM10 7V25H4V7h6m0-2H4A2 2 0 002 7V25a2 2 0 002 2h6a2 2 0 002-2V7a2 2 0 00-2-2zM28 7V25H22V7h6m0-2H22a2 2 0 00-2 2V25a2 2 0 002 2h6a2 2 0 002-2V7a2 2 0 00-2-2z"></path></svg>`;
export default svgResultCarbonIcon;
