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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M26,28H6a2.0021,2.0021,0,0,1-2-2V9H6V26H26V9h2V26A2.0021,2.0021,0,0,1,26,28Z"></path><path d="M18 23H12V21h6V17H14a2.002 2.002 0 01-2-2V11a2.002 2.002 0 012-2h6v2H14v4h4a2.002 2.002 0 012 2v4A2.0023 2.0023 0 0118 23zM4 4H28V6H4z"></path></svg>`;
export default svgResultCarbonIcon;
