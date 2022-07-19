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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M30,16H28V4H16V2H28a2.0023,2.0023,0,0,1,2,2Z"></path><path d="M25,23H23V9H9V7H23a2.0023,2.0023,0,0,1,2,2Z"></path><path d="M18,30H4a2.0023,2.0023,0,0,1-2-2V14a2.002,2.002,0,0,1,2-2H18a2.0023,2.0023,0,0,1,2,2V28A2.0027,2.0027,0,0,1,18,30ZM4,14V28H18.002L18,14Z"></path><path d="M13,18h1V16H13a5.0083,5.0083,0,0,0-4.8989,4H7v2H8.1011A5.0083,5.0083,0,0,0,13,26h1V24H13a3,3,0,0,1,0-6Z"></path></svg>`;
export default svgResultCarbonIcon;
