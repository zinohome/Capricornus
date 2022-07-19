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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M21.87,7.84l-1.74-1L16,14h0a2,2,0,1,0,2,2,2,2,0,0,0-.27-1Z"></path><path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,2a12,12,0,0,1,11.17,7.65,25.69,25.69,0,0,0-3.69-1.5l-1,1.77a22.7,22.7,0,0,1,5.41,2.39,11.05,11.05,0,0,1,0,3.38A22.92,22.92,0,0,1,16,21,22.92,22.92,0,0,1,4.13,17.69a11.05,11.05,0,0,1,0-3.38A22.8,22.8,0,0,1,15,11V9a25,25,0,0,0-10.17,2.6A12,12,0,0,1,16,4Zm0,24A12,12,0,0,1,4.83,20.35,24.88,24.88,0,0,0,16,23a24.88,24.88,0,0,0,11.17-2.65A12,12,0,0,1,16,28Z"></path></svg>`;
export default svgResultCarbonIcon;
