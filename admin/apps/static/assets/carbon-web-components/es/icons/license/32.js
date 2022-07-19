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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M10 6H22V8H10zM10 10H22V12H10zM10 24H16V26H10zM10 14H16V16H10z"></path><path d="M24,30H8a2.0023,2.0023,0,0,1-2-2V4A2.0023,2.0023,0,0,1,8,2H24a2.0023,2.0023,0,0,1,2,2V28A2.0023,2.0023,0,0,1,24,30ZM8,4V28H24V4Z"></path></svg>`;
export default svgResultCarbonIcon;
