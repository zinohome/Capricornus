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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M6,30H26a2,2,0,0,0,2-2V22a2,2,0,0,0-2-2H6a2,2,0,0,0-2,2v6A2,2,0,0,0,6,30Zm0-8H26v6H6Z"></path><circle cx="9" cy="25" r="1"></circle><circle cx="16" cy="14.5" r="1.5"></circle><path d="M10.7832,10.3325a7.0007,7.0007,0,0,1,10.4341,0l-1.49,1.334a5,5,0,0,0-7.4537,0Z"></path><path d="M7.1992,7.3994a11.0019,11.0019,0,0,1,17.6006,0L23.2,8.6a9.0009,9.0009,0,0,0-14.4014.0005Z"></path></svg>`;
export default svgResultCarbonIcon;
