/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { svg } from 'lit-html';
import spread from '../../../globals/directives/spread';
const svgResultCarbonIcon = ({ children, ...attrs } = {}) =>
  svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${spread(
    attrs
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M26,4H6A2.0025,2.0025,0,0,0,4,6V26a2.0025,2.0025,0,0,0,2,2H26a2.0023,2.0023,0,0,0,2-2V6A2.0023,2.0023,0,0,0,26,4ZM6,6H26V16H24v2h2v2H24v2h2v2H24v2H22V24H20v2H18V24H16v2H14V24H12v2H10V24H8v2H6Z"></path><path d="M8 20H10V22H8zM12 20H14V22H12zM16 20H18V22H16zM20 20H22V22H20zM8 16H10V18H8zM16 16H18V18H16zM20 16H22V18H20zM20 12H22V14H20zM20 8H22V10H20z"></path></svg>`;
export default svgResultCarbonIcon;
