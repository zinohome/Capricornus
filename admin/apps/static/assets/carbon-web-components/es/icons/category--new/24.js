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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M21 10L17 10 17 6 15 6 15 10 11 10 11 12 15 12 15 16 17 16 17 12 21 12 21 10z"></path><path d="M28,24H17V20h6a2.0027,2.0027,0,0,0,2-2V4a2.0023,2.0023,0,0,0-2-2H9A2.002,2.002,0,0,0,7,4V18a2.0023,2.0023,0,0,0,2,2h6v4H4a2,2,0,0,0-2,2v4H4V26H15v4h2V26H28v4h2V26A2,2,0,0,0,28,24ZM9,4H23l.002,14H9Z"></path></svg>`;
export default svgResultCarbonIcon;
