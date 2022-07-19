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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path fill-rule="evenodd" d="M26,6a2,2,0,0,0-2-2H8A2,2,0,0,0,6,6V26a2,2,0,0,0,2,2h8V26H8V6H24v6h2Z"></path><path d="M10 18H16V20H10zM10 14H22V16H10z"></path><path fill-rule="evenodd" d="M22 10v2H10V10zM25 23l5 2V23l-5-2.5V18a1 1 0 00-2 0v2.5L18 23v2l5-2v3.5L21 28v1l3-1 3 1V28l-2-1.5z"></path></svg>`;
export default svgResultCarbonIcon;
