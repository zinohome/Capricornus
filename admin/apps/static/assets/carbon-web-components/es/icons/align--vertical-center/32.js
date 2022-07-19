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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M30,15H26V12a2.0025,2.0025,0,0,0-2-2H20a2.0025,2.0025,0,0,0-2,2v3H14V8a2.0025,2.0025,0,0,0-2-2H8A2.0025,2.0025,0,0,0,6,8v7H2v2H6v7a2.0025,2.0025,0,0,0,2,2h4a2.0025,2.0025,0,0,0,2-2V17h4v3a2.0025,2.0025,0,0,0,2,2h4a2.0025,2.0025,0,0,0,2-2V17h4ZM8,24V8h4l.0012,16Zm12-4V12h4l.0012,8Z"></path></svg>`;
export default svgResultCarbonIcon;
