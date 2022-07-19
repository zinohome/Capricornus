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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<circle cx="21" cy="21" r="2"></circle><circle cx="7" cy="7" r="2"></circle><path d="M27,31a4,4,0,1,1,4-4A4.0118,4.0118,0,0,1,27,31Zm0-6a2,2,0,1,0,2,2A2.0059,2.0059,0,0,0,27,25Z"></path><path d="M30,16A14.0412,14.0412,0,0,0,16,2,13.0426,13.0426,0,0,0,9.2,3.8l1.1,1.7a24.4254,24.4254,0,0,1,2.4-1A25.1349,25.1349,0,0,0,10,15H4a11.1489,11.1489,0,0,1,1.4-4.7L3.9,9A13.8418,13.8418,0,0,0,2,16,13.9983,13.9983,0,0,0,16,30a13.3656,13.3656,0,0,0,5.2-1l-.6-1.9a11.4416,11.4416,0,0,1-5.2.9h0A21.0713,21.0713,0,0,1,12,17H29.9A3.4019,3.4019,0,0,0,30,16ZM12.8,27.6h0a13.02,13.02,0,0,1-5.3-3.1A12.5053,12.5053,0,0,1,4,17h6A25.0022,25.0022,0,0,0,12.8,27.6ZM12,15A21.4461,21.4461,0,0,1,15.3,4h1.4A21.4461,21.4461,0,0,1,20,15Zm10,0A23.2777,23.2777,0,0,0,19.2,4.4,12.0919,12.0919,0,0,1,27.9,15Z"></path></svg>`;
export default svgResultCarbonIcon;
