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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<circle cx="10" cy="14" r="2"></circle><path d="M16,30a1,1,0,0,1-.71-.29L4.59,19A2,2,0,0,1,4,17.59V10A2,2,0,0,1,6,8h7.59A2,2,0,0,1,15,8.59l10.71,10.7a1,1,0,0,1,0,1.42l-9,9A1,1,0,0,1,16,30ZM6,10v7.59l10,10L23.59,20l-10-10Z"></path><path d="M27.71,13.29,17,2.59A2,2,0,0,0,15.59,2H8A2,2,0,0,0,6,4V6H8V4h7.59l10,10-1.3,1.29,1.42,1.42,2-2A1,1,0,0,0,27.71,13.29Z"></path></svg>`;
export default svgResultCarbonIcon;
