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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M19 24H23V28H19zM26 24H30V28H26zM19 17H23V21H19zM26 17H30V21H26z"></path><path d="M17,24H4V10H28v5h2V10a2.0023,2.0023,0,0,0-2-2H22V4a2.0023,2.0023,0,0,0-2-2H12a2.002,2.002,0,0,0-2,2V8H4a2.002,2.002,0,0,0-2,2V24a2.0023,2.0023,0,0,0,2,2H17ZM12,4h8V8H12Z"></path></svg>`;
export default svgResultCarbonIcon;
