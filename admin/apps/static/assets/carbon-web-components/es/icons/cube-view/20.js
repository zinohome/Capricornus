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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<circle cx="16" cy="16" r="2"></circle><path d="M23.7769,15.4785A8.64,8.64,0,0,0,16,10a8.64,8.64,0,0,0-7.7769,5.4785L8,16l.2231.5215A8.64,8.64,0,0,0,16,22a8.64,8.64,0,0,0,7.7769-5.4785L24,16ZM16,20a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,16,20Z"></path><path d="M28.5039,8.1362l-12-7a1,1,0,0,0-1.0078,0l-12,7A1,1,0,0,0,3,9V23a1,1,0,0,0,.4961.8638l12,7a1,1,0,0,0,1.0078,0l12-7A1,1,0,0,0,29,23V9A1,1,0,0,0,28.5039,8.1362ZM27,22.4258,16,28.8423,5,22.4258V9.5742L16,3.1577,27,9.5742Z"></path></svg>`;
export default svgResultCarbonIcon;
