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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M8 18c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6C14 20.7 11.3 18 8 18zM8 28c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4C12 26.2 10.2 28 8 28zM30 24h-2C28 13 19 4 8 4V2C20.1 2 30 11.9 30 24z"></path><path d="M22,24h-2c0-6.6-5.4-12-12-12v-2C15.7,10,22,16.3,22,24z"></path></svg>`;
export default svgResultCarbonIcon;
