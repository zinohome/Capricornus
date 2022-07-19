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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M22,10V6H10v6H4V2H2V28a2.0025,2.0025,0,0,0,2,2H30V10ZM12,14V8h8v4h8V22H22V16H12v6H4V14ZM4,28V24H14V18h6v6h8v4Z"></path></svg>`;
export default svgResultCarbonIcon;
