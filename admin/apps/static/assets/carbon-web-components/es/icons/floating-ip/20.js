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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M25,11a5.0083,5.0083,0,0,0-4.8989,4H11.8989a5,5,0,1,0,0,2h8.2022A5,5,0,1,0,25,11Zm0,8a3,3,0,1,1,3-3A3.0033,3.0033,0,0,1,25,19Z"></path></svg>`;
export default svgResultCarbonIcon;
