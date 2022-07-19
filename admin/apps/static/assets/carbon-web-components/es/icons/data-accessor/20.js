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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M28,20H26v2h2v6H4V22H6V20H4a2.0024,2.0024,0,0,0-2,2v6a2.0024,2.0024,0,0,0,2,2H28a2.0024,2.0024,0,0,0,2-2V22A2.0024,2.0024,0,0,0,28,20Z"></path><circle cx="7" cy="25" r="1"></circle><path d="M21,13a2.9609,2.9609,0,0,0-1.2854.3008L17.4141,11l2.3-2.3008A2.9609,2.9609,0,0,0,21,9a3,3,0,1,0-3-3,2.9665,2.9665,0,0,0,.3,1.2852L16,9.5859,13.7,7.2852A2.9665,2.9665,0,0,0,14,6a3,3,0,1,0-3,3,2.9609,2.9609,0,0,0,1.2854-.3008L14.5859,11l-2.3005,2.3008A2.9609,2.9609,0,0,0,11,13a3,3,0,1,0,3,3,2.9665,2.9665,0,0,0-.3-1.2852L16,12.4141l2.3,2.3007A2.9665,2.9665,0,0,0,18,16a3,3,0,1,0,3-3Zm0-8a1,1,0,1,1-1,1A1.0009,1.0009,0,0,1,21,5ZM10,6a1,1,0,1,1,1,1A1.0009,1.0009,0,0,1,10,6Zm1,11a1,1,0,1,1,1-1A1.0009,1.0009,0,0,1,11,17Zm10,0a1,1,0,1,1,1-1A1.0009,1.0009,0,0,1,21,17Z"></path></svg>`;
export default svgResultCarbonIcon;
