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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<circle cx="16" cy="19" r="2"></circle><path d="M23.7769,18.4785A8.64,8.64,0,0,0,16,13a8.64,8.64,0,0,0-7.7769,5.4785L8,19l.2231.5215A8.64,8.64,0,0,0,16,25a8.64,8.64,0,0,0,7.7769-5.4785L24,19ZM16,23a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,16,23Z"></path><path d="M27,3H5A2,2,0,0,0,3,5V27a2,2,0,0,0,2,2H27a2,2,0,0,0,2-2V5A2,2,0,0,0,27,3ZM5,5H27V9H5ZM5,27V11H27V27Z"></path></svg>`;
export default svgResultCarbonIcon;
