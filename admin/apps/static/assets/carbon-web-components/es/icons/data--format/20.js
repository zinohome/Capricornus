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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M18 11H26V13H18zM6 19H14V21H6zM10 16a4 4 0 114-4A4.0045 4.0045 0 0110 16zm0-6a2 2 0 102 2A2.002 2.002 0 0010 10zM22 24a4 4 0 114-4A4.0045 4.0045 0 0122 24zm0-6a2 2 0 102 2A2.002 2.002 0 0022 18z"></path><path d="M28,30H4a2.0021,2.0021,0,0,1-2-2V4A2.0021,2.0021,0,0,1,4,2H28a2.0021,2.0021,0,0,1,2,2V28A2.0021,2.0021,0,0,1,28,30ZM4,4V28H28V4Z"></path></svg>`;
export default svgResultCarbonIcon;
